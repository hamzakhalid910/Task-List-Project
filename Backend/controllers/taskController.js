import mongoose from "mongoose";
import Task from "../model/taskModel.js";

// Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single task by ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new task
export const createTask = async (req, res) => {
  const { title, description, startDate, endDate, user } = req.body; // Destructure user from req.body

  if (!title || !description || !startDate || !endDate || !user) {
    return res.status(400).json({ message: "All fields are required, including user" });
  }

  try {
    const task = new Task({
      title,
      description,
      startDate,
      endDate,
      user // Associate the task with the user
    });
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.error("Error creating task:", err.message); // Log detailed error message
    res.status(400).json({ message: err.message });
  }
};


// Update a task by ID
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      task.title = req.body.title || task.title;
      task.description = req.body.description || task.description;
      task.attachment = req.body.attachment || task.attachment;
      task.startDate = req.body.startDate || task.startDate;
      task.endDate = req.body.endDate || task.endDate;

      const updatedTask = await task.save();
      res.json(updatedTask);
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (err) {
    res.status(400).json({ message: "What i can say" });
  }
};


// Delete a task by ID
export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    
    // Check if the task exists
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    // Delete the task
    await Task.findByIdAndDelete(taskId);
    
    // Respond with success message
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};