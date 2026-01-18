// // import mongoose from "mongoose";

// // const dbConnection = async () => {
// //   try {
// //     await mongoose.connect(process.env.MONGODB_URI);

// //     console.log("Database Connected");
// //   } catch (error) {
// //     console.log("DB Error: " + error);
// //   }
// // };

// // export default dbConnection;
// import mongoose from "mongoose";
// import { MongoMemoryServer } from "mongodb-memory-server";

// const dbConnection = async () => {
//   try {
//     const mongoServer = await MongoMemoryServer.create();
//     const uri = mongoServer.getUri();

//     await mongoose.connect(uri);

//     console.log("🟢 In-Memory Database Connected");
//   } catch (error) {
//     console.log("DB Error: " + error);
//   }
// };

// export default dbConnection;
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const seedAdminUser = async () => {
  const adminExists = await User.findOne({ email: "admin@test.com" });

  if (!adminExists) {
    await User.create({
      name: "Admin",
      email: "admin@test.com",
      password: "123456",   // <- plain text
      role: "admin",
      title: "Administrator",
      isAdmin: true,
      isActive: true,
    });

    console.log("✅ Admin user seeded");
  }
};

const dbConnection = async () => {
  try {
    const mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    await mongoose.connect(uri);
    console.log("🟢 In-Memory Database Connected");

    await seedAdminUser();
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;
