// import asyncHandler from "express-async-handler";
// import jwt from "jsonwebtoken";
// import User from "../models/userModel.js";

// const protectRoute = asyncHandler(async (req, res, next) => {
//   let token = req.cookies.token;

//   if (token) {
//     try {
//       const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

//       const resp = await User.findById(decodedToken.userId).select(
//         "isAdmin email"
//       );

//       req.user = {
//         email: resp.email,
//         isAdmin: resp.isAdmin,
//         userId: decodedToken.userId,
//       };

//       next();
//     } catch (error) {
//       console.error(error);
//       return res
//         .status(401)
//         .json({ status: false, message: "Not authorized. Try login again." });
//     }
//   } else {
//     return res
//       .status(401)
//       .json({ status: false, message: "Not authorized. Try login again." });
//   }
// });

// const isAdminRoute = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     next();
//   } else {
//     return res.status(401).json({
//       status: false,
//       message: "Not authorized as admin. Try login as admin.",
//     });
//   }
// };

// export { isAdminRoute, protectRoute };
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = asyncHandler(async (req, res, next) => {
  // ✅ Safely read token
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({
      status: false,
      message: "Not authorized. No token.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("email isAdmin");

    if (!user) {
      return res.status(401).json({
        status: false,
        message: "User no longer exists.",
      });
    }

    req.user = {
      userId: decoded.userId,
      email: user.email,
      isAdmin: user.isAdmin,
    };

    next();
  } catch (error) {
    console.error("JWT Error:", error.message);
    return res.status(401).json({
      status: false,
      message: "Not authorized. Invalid token.",
    });
  }
});

const isAdminRoute = (req, res, next) => {
  if (req.user?.isAdmin) {
    next();
  } else {
    return res.status(403).json({
      status: false,
      message: "Admin access only.",
    });
  }
};

export { protectRoute, isAdminRoute };
