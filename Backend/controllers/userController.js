import User from "../model/userModel.js";
import bcrypt from "bcrypt";

// Get all users
export const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    const token = newUser.createJWT();
    res.status(201).json({ newUser, token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//User by Email

export const getUserByEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a user by ID
export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.fullname = req.body.fullname || user.fullname;
      user.email = req.body.email || user.email;
      // Update other user properties here

      const updatedUser = await user.save();
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    // Find user by ID and delete
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email }).select("+password");
    if (!user) {
      return res.status(401).json({ message: "Login failed" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "invalid email or pass" });
    }

    const token = user.createJWT();
    res
      .status(200)
      .json({
        user: { email: user.email, fullname: user.fullname, role: user.role },
        token,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
