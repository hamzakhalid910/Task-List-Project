import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import BasicDateCalendar from "./BasicDateCalender";
import Chart from "./Chart";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

function Dashboard() {
  const [loggedInUserId, setLoggedInUserId] = useState("");
  const [tasks, setTasks] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const [declinedTasks, setDeclinedTasks] = useState(0);

  //Get UserId From Token
  const getUserIdFromToken = () => {
    try {
      const token = localStorage.getItem("jsonwebtoken");
      console.log(token);
      if (token) {
        const tokenPayload = token.split(".")[1]; // Extracting payload part
        const decodedPayload = JSON.parse(atob(tokenPayload)); // Decode and parse payload
        console.log("Try fecting User ID");
        console.log(decodedPayload.userId);
        setLoggedInUserId(decodedPayload.userId);
        console.log("Logged In User:", loggedInUserId);
        return decodedPayload.userId; // Return user ID
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };
  //Get Role from Token
  const getUserRoleFromToken = () => {
    try {
      const token = localStorage.getItem("jsonwebtoken");
      if (token) {
        console.log("Token from localStorage:", token); // Log token
        const tokenPayload = token.split(".")[1]; // Extracting payload part
        const decodedPayload = JSON.parse(atob(tokenPayload)); // Decode and parse payload
        console.log("Decoded Token Payload:", decodedPayload); // Log decoded payload
        setUserRole(decodedPayload.role); // Set user role
        console.log("Decoded Token Role:", decodedPayload.role);
        return decodedPayload.role; // Log user role
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/tasks/")
      .then((response) => {
        getUserIdFromToken();
        console.log(response.data);
        // Filter tasks based on logged-in user's ID
        console.log("User Role:", getUserRoleFromToken());
        setUserRole(getUserRoleFromToken());
        console.log("New Role:", userRole);
        if (userRole === "user") {
          const filteredTasks = response.data.filter(
            (task) => task.user === loggedInUserId
          );
          console.log("Length of Filtered Task:", filteredTasks.length);
          setTasks(filteredTasks);
          const currentDateTime = new Date();
          const declinedTasksCount = filteredTasks.filter(
            (task) => new Date(task.endDate) < currentDateTime
          ).length;
          console.log("Declined Task:", declinedTasksCount);
          setDeclinedTasks(declinedTasksCount);
        } else {
          setTasks(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, [loggedInUserId]);

  return (
    <div className="w-[85%] bg-gray-100 px-4 py-2 lg:h-screen flex">
      <div className="flex-wrap mx-auto my-auto w-[94%] bg-white h-[90%] rounded-xl border-2 border-blue-100">
        <h2 className="font-bold text-left p-2 ml-4 text-xl ">Analytics</h2>
        <div className=" flex w-[100%] p-4 space-x-4 text-sm font-poppins">
          <div className="w-[23%] h-28 mt-2 font-bold border-1 rounded-md bg-[#F4F2FF]">
            <h1 className="mt-2 px-4  text-left ">Total Task</h1>
            <h2 className="mt-2 text-left px-4 h-10 text-xl text-gray-400 font-poppins">
              {tasks.length}
            </h2>

            <div class="ml-3 px-4 w-[90%] rounded-sm h-3.5 bg-[#4BCBEB]"></div>
          </div>
          <div className="mt-2 w-[25%] h-28 font-bold border-1 rounded-md bg-[#E2EFFC]">
            <h1 className="mt-2 px-4 text-left">Completed Task</h1>
            <h2 className="mt-2 text-left px-4 h-10 text-xl text-gray-500">
              80/100
            </h2>
            <div class="ml-3 px-4 w-[80%] rounded-sm h-3.5 bg-green-500"></div>
          </div>
          <div className="w-[25%] mt-2 h-28 font-bold border-1 rounded-md bg-[#FBEDD2] ">
            <h1 className="mt-2 px-4 text-left">Pending Task</h1>
            <h2 className="mt-2 text-left px-4 h-10 text-xl text-gray-500">
              50/100
            </h2>
            <div class="ml-3 px-4 w-[50%] rounded-sm h-3.5 bg-[#F0AD4E]"></div>
          </div>
          <div className="w-[25%] h-28 mt-2 font-bold border-1 rounded-md bg-[#E0F6F4]">
            <h1 className="mt-2 px-4 text-left">Decline Task</h1>
            <h2 className=" mt-4 lg:mt-2 text-left px-4 h-10 text-xl text-gray-500">
              {declinedTasks}
            </h2>
            <div class="ml-3 px-4 w-[10%] rounded-sm h-3.5 bg-[#D9534F]"></div>
          </div>
        </div>

        {/* ---------- */}

        <div className="w-[100%] ">
          <div className="flex w-[100%]  p-4 space-x-2">
            <div className="md:w-[100%] lg:w-[60%] bg-white rounded-md">
              <h1 className="mt-4 text-left font-bold px-4">
                Total Task ratio
              </h1>
              <div className="mx-auto">
                <Chart />
              </div>
            </div>
            <div className="w-[96%] lg:w-[40%] items-center mt-2 md:mt-10 justify-end ">
              <div className="md:justify-end mt-2 lg-mt-0 bg-white rounded-md">
                <div className="w-[96%]">
                  <BasicDateCalendar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
