import { useState } from "react";
import "./App.css";

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
import PropTypes from "prop-types";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn onLogin={handleLogin} />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute element={<AdminDashboard />} loggedIn={loggedIn} />
          }
        />
        <Route
          path="/users"
          element={<ProtectedRoute element={<Users />} loggedIn={loggedIn} />}
        />
        <Route
          path="/task"
          element={<ProtectedRoute element={<Task />} loggedIn={loggedIn} />}
        />
        <Route
          path="/setting"
          element={<ProtectedRoute element={<Setting />} loggedIn={loggedIn} />}
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute element={<Notifications />} loggedIn={loggedIn} />
          }
        />
      </Routes>
    </Router>
  );
}

App.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default App;
