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
import PrivateRoute from "./Components/PrivateRoute";
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
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route index element={<AdminDashboard />} />
        </Route>
        <Route path="/users" element={<PrivateRoute />}>
          <Route index element={<Users />} />
        </Route>
        <Route path="/task" element={<PrivateRoute />}>
          <Route index element={<Task />} />
        </Route>
        <Route path="/setting" element={<Setting />} />
        <Route path="/notifications" element={<PrivateRoute />}>
          <Route index element={<Notifications />} />
        </Route>
      </Routes>
    </Router>
  );
}

App.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default App;
