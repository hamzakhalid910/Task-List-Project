import express from "express";
// import mongoose from "mongoose";
import connectDB from "./config/db.js";
import corsMiddleware from "./config/cors.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Call the connectDB function to establish the connection
connectDB();

// Middleware
// Apply CORS middleware
app.use(corsMiddleware);
app.use(express.json());

// Routes
import userRoutes from "./Routes/userRoutes.js";
import taskRoutes from "./Routes/taskRoutes.js";
import notificationRoutes from "./Routes/notificationRoutes.js";

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/notifications", notificationRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
