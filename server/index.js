// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";
// import morgan from "morgan";
// import { errorHandler, routeNotFound } from "./middleware/errorMiddleware.js";
// import routes from "./routes/index.js";
// import dbConnection from "./utils/connectDB.js";

// dotenv.config();

// dbConnection();

// const port = process.env.PORT || 5000;

// const app = express();

// app.use(
//   cors({
//     origin: true, // ✅ allow ALL origins (dev-safe)
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true,
//   })
// );
// app.options("*", cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(cookieParser());

// //app.use(morgan("dev"));
// app.use("/api", routes);

// app.use(routeNotFound);
// app.use(errorHandler);

// app.listen(port, () => console.log(`Server listening on ${port}`));
// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";
// import routes from "./routes/index.js";
// import dbConnection from "./utils/connectDB.js";

// dotenv.config();
// dbConnection();

// const app = express();

// /* 🔥 CORS — MUST BE FIRST */
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       callback(null, true); // allow ALL origins
//     },
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// /* 🔥 HANDLE PREFLIGHT */
// app.options("*", cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use("/api", routes);

// const port = process.env.PORT || 5000;
// app.listen(port, () =>
//   console.log(`🚀 Server running on port ${port}`)
// );
// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";
// import routes from "./routes/index.js";
// import dbConnection from "./utils/connectDB.js";

// dotenv.config();
// dbConnection();

// const app = express();

// app.use(
//   cors({
//     origin: [
//       "https://mern-task-manager-app.netlify.app",
//       "http://localhost:3000",
//       "http://localhost:3001",
//       "https://crispy-engine-jjrwpg74qvg5c9jq-3000.app.github.dev",
//       "https://crispy-engine-jjrwpg74qvg5c9jq-5000.app.github.dev"
//     ],
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );

// // This is IMPORTANT for preflight requests
// app.options("*", cors());

// app.use(express.json());
// app.use(cookieParser());

// app.use("/api", routes);

// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server listening on ${port}`));
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import dbConnection from "./utils/connectDB.js";

dotenv.config();
dbConnection();

const app = express();

app.use(
  cors({
    origin: true, // allow all origins
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["set-cookie"],
  })
);

// This is IMPORTANT for preflight requests
app.options("*", cors());

app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on ${port}`));
