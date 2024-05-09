import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user", // Default role is 'user'
    enum: ["user", "admin"], // Available roles
  },

  // Other user properties
});
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  console.log(this.password);
});

userSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id, role: this.role, fullname: this.fullname }, "jwtSecret", {
    expiresIn: "1h",
  });
};

const User = mongoose.model("User", userSchema);

export default User;
