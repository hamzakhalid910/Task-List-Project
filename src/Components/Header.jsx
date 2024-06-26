import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TaskListIcon } from "./TaskListIcon";

function Header({ pageName }) {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    // Function to retrieve user role from token in local storage
    const getUserNameFromToken = () => {
      try {
        const token = localStorage.getItem("jsonwebtoken");
        if (token) {
          console.log("Token from localStorage:", token); // Log token
          const tokenPayload = token.split(".")[1]; // Extracting payload part
          const decodedPayload = JSON.parse(atob(tokenPayload)); // Decode and parse payload
          console.log("Decoded Token Payload:", decodedPayload); // Log decoded payload
          setUserName(decodedPayload.fullname); // Set user role
          console.log("Decoded Token Name:", decodedPayload.fullname); // Log user role
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    };
    getUserNameFromToken(); // Call the function when component mounts
  }, []);

  return (
    <div className="flex  justify-between items-center">
      <div className="w-[13.5%] lg:w-[15%] h-16 flex items-center py-4 pl-2 lg:pl-4">
        <div>
          <TaskListIcon />
        </div>
        <h1 className=" hidden md:block text-sky-400 font-bold text-md text-left ml-2 h-12 content-center">
          Task List Manager
        </h1>
      </div>

      <div className=" border-l-2 border-gray-100 flex h-16 py-4 w-[35%] lg:w-[65%] content-center">
        <h2 className="font-Desktop  font-bold text-left pl-2 lg:pl-10 content-center text-md lg:text-2xl">
          {pageName}
        </h2>
      </div>

      <div className="flex py-4 h-16 py-2 w-[10] lg:w-[5%] content-center justify-end ">
        <Link to="/notifications">
          <img className="h-7 w-7" src="src\Pages\Images\bell.png" alt="" />
        </Link>
      </div>

      <div className=" flex h-16 px-4 py-2 w-[40%] lg:w-[15%] justify-start content-center">
        <img
          className="object-contain h-11 w-8 content-center"
          src="src\Pages\Images\User.jpg"
          alt="User"
        />
        <div className="lg:content-center">
          <p className=" md:block ml-2 font-bold ">{userName}</p>
          <p className=" md:block ml-2 text-gray-500 text-sm text-left">
            Status-200
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
