import express from "express";
const router = express.Router();
import * as taskController from "../controllers/taskController.js";

// Get all tasks
router.get("/", taskController.getAllTasks);

// Get a single task by ID
router.get("/:id", taskController.getTaskById);

// Create a new task
router.post("/addtask", taskController.createTask);

// Update a task by ID
router.put("/:id", taskController.updateTask);

// Delete a task by ID
router.delete("/:id", taskController.deleteTask);
export default router;
