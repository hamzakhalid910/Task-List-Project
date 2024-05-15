import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/DB.js";
import cors from "cors";
import corsMiddleware from "./config/Cors.js";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Call the connectDB function to establish the connection
connectDB();

// Middleware
// Apply CORS middleware
// app.use(corsMiddleware);
app.use(corsMiddleware);

app.use(cors());
app.use(express.json());
console.log("hell0");

// Routes
import userRoutes from "./Routes/userRoutes.js";
import taskRoutes from "./Routes/taskRoutes.js";
import notificationRoutes from "./Routes/notificationRoutes.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate a unique filename
  },
});
const upload = multer({ storage: storage });

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/notifications", notificationRoutes);

app.use("/uploads", express.static("uploads"));

// app.post("/upload", upload.single("file"), function (req, res, next) {
//   // req.file contains the uploaded file
//   res.send("File uploaded successfully!");
// });

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
