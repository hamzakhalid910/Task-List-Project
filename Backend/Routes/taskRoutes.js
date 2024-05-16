import express from "express";
const router = express.Router();
import * as taskController from "../controllers/taskController.js";
import multer from "multer"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/"); // Specify the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname); // Generate a unique filename
    },
  });
  const upload = multer({ storage: storage });
  
// Get all tasks
router.get("/", taskController.getAllTasks);

// Get a single task by ID
router.get("/:id", taskController.getTaskById);

// Create a new task
router.post("/addtask", upload.single('file'),  taskController.createTask);

// Update a task by ID
router.put("/:id", taskController.updateTask);

// Delete a task by ID
router.delete("/:id", taskController.deleteTask);
export default router;
