import { useState } from "react";
import "./App.css";
import axios from "axios";

import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import AdminDashboard from "./Pages/AdminDashboard";
import Users from "./Pages/Users";
import Task from "./Pages/Task";
import Setting from "./Pages/Setting";
import ProgressBar from "@ramonak/react-progress-bar";
import Notifications from "./Pages/Notifications";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
// Define your backend API base URL
const API_BASE_URL = "http://localhost:3000/api";

// Create an Axios instance with the base URL
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />

          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/task" element={<Task />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
