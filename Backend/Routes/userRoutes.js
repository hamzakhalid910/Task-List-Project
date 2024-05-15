import express from "express";
const router = express.Router();
import * as userController from "../controllers/userController.js";

// Get all users
router.get("/", userController.getAllUsers);

// Get a single user by ID
router.get("/:id", userController.getUserById);

//User by Email
router.get("/:email", userController.getUserByEmail);


// Create a new user
router.post("/register", userController.createUser);

// Update a user by ID
router.put("/:id", userController.updateUser);

// Delete a user by ID
router.delete("/:id", userController.deleteUser);

router.post("/login",userController.loginUser)

export default router;
