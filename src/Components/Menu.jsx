import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import UserIcon from "./UserIcon";
import { TaskIcon } from "./TaskIcon";
import { SettingIcon } from "./SettingIcon";
import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "./LogoutIcon";

function Menu() {
  const [active, setActive] = useState("dashboard");
  const [userRole, setUserRole] = useState(null); // State to store user role
  const navigate = useNavigate();

  useEffect(() => {
    // Function to retrieve user role from token in local storage
    const getUserRoleFromToken = () => {
      try {
        const token = localStorage.getItem("jsonwebtoken");
        if (token) {
          console.log("Token from localStorage:", token); // Log token
          const tokenPayload = token.split(".")[1]; // Extracting payload part
          const decodedPayload = JSON.parse(atob(tokenPayload)); // Decode and parse payload
          console.log("Decoded Token Payload:", decodedPayload); // Log decoded payload
          setUserRole(decodedPayload.role); // Set user role
          console.log("Decoded Token Role:", decodedPayload.role); // Log user role
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    };
    getUserRoleFromToken(); // Call the function when component mounts
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleLogout = () => {
    localStorage.removeItem("jsonwebtoken");
    navigate("/login"); // Remove JWT token from local storage
    // Additional logic for logout such as redirecting to login page can be added here
  };

  return (
    <div className="w-[15%] bg-white-100 text-left border-1 p-2 lg:p-4 ">
      <ul className=" mb-2  font-bold">
        <li className="text-sm lg:text-base lg:px-2 ">MENU</li>
      </ul>
      <Link to="/dashboard">
        <button
          className={`flex shadow  lg:w-[96%] text-left font-bold px-1 lg:px-2 mt-2 rounded-md py-2 hover:bg-sky-200 ${
            active === "dashboard" ? "text-sky-500" : "text-black"
          }`}
          onClick={() => setActive("dashboard")}
        >
          <div className="mt-1 mr-1">
            <MenuIcon />
          </div>
          {/* Conditional rendering of text based on screen size */}
          <span className="hidden md:block">Dashboard</span>
        </button>
      </Link>

      {/* --------- */}

      {userRole === "admin" && (
        <Link to="/users">
          <button
            className={`font-blue flex shadow w:[10%] lg:w-[96%] text-left font-bold px-1 lg:px-2 mt-2 rounded-md py-2 hover:bg-sky-200 ${
              active === "users" ? "text-sky-500" : "text-black"
            }`}
            onClick={() => setActive("users")}
          >
            <div className="mr-1">
              <UserIcon />
            </div>
            <span className="hidden md:block ">Users</span>
          </button>
        </Link>
      )}

      {/* ---- */}

      <Link to="/Task">
        <button
          className={`flex shadow w:[10%] lg:w-[96%] text-left font-bold px-1 lg:px-2 mt-2 rounded-md py-2 hover:bg-sky-200 ${
            active === "task" ? "text-sky-500" : "text-black"
          }`}
          onClick={() => setActive("task")}
        >
          <div className="mr-1">
            <TaskIcon />
          </div>
          <span className="hidden md:inline-block">Task</span>
        </button>
      </Link>

      {/*-------- */}

      <Link to="/setting">
        <button
          className={`flex shadow  w:[10%] lg:w-[96%] text-left font-bold px-1 lg:px-2 mt-2 rounded-md py-2 hover:bg-sky-200 ${
            active === "setting" ? "text-sky-500" : "text-black"
          }`}
          onClick={() => setActive("setting")}
        >
          <div className="mr-1">
            <SettingIcon />
          </div>
          <span className="hidden md:inline-block">Setting</span>
        </button>
      </Link>

      <button
        className="flex shadow  w:[10%] lg:w-[96%] text-left font-bold px-1 lg:px-2 mt-2 rounded-md py-2 hover:bg-sky-200"
        onClick={handleLogout}
      >
        <div className="mr-1">
          <LogoutIcon />
        </div>
        <span className="hidden md:inline-block">Log Out</span>
      </button>
    </div>
  );
}

export default Menu;
