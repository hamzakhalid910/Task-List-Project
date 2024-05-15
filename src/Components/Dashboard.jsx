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
  const [pendingTasks, setPendingTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

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
        } else {
          setTasks(response.data);
        }

        const currentDateTime = new Date();

        const declinedTasksCount = tasks.filter(
          (task) => new Date(task.endDate) < currentDateTime
        ).length;
        console.log("Declined Task:", declinedTasksCount);
        setDeclinedTasks(declinedTasksCount);

        const pendingTasksCount = tasks.filter(
          (task) => new Date(task.endDate) > currentDateTime
        ).length;
        console.log("Pending Task:", pendingTasksCount);
        setPendingTasks(pendingTasksCount);

        const completedTasksCount = declinedTasksCount - pendingTasksCount;
        setCompletedTasks(completedTasksCount);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, [loggedInUserId]);

  return (
    <div className="w-[85%] bg-gray-100 px-4 py-2 h-full lg:h-screen flex">
      <div className="flex-wrap h-[90%] mx-auto my-auto w-[94%] bg-white rounded-xl border-2 border-blue-100">
        <h2 className="font-bold text-left p-2 ml-4 text-xl ">Analytics</h2>
        <div className=" lg:flex w-[100%]  text-sm font-poppins">
          <div className="w-[90%] py-2 lg:w-[23%] h-28 mx-auto mt-2 font-bold border-1 rounded-md bg-[#F4F2FF]">
            <h1 className="mt-2 px-4 text-left ">Total Task</h1>
            <h2 className="mt-2 text-left px-4 h-10 text-xl text-gray-400 font-poppins">
              {tasks.length}
            </h2>

            <div class="ml-3 px-4 w-[90%] rounded-sm h-3.5 bg-[#4BCBEB]"></div>
          </div>

          <div className="w-[90%]  py-2 lg:w-[23%]  mx-auto h-28 mt-2 mb-2 font-bold border-1 rounded-md bg-[#E2EFFC]">
            <h1 className="mt-2 px-4 text-left">Completed Task</h1>
            <h2 className="mt-2 text-left px-4 h-10 text-xl text-gray-500">
              {completedTasks}
            </h2>
            <div class="ml-3 px-4 w-[80%] rounded-sm h-3.5 bg-green-500"></div>
          </div>

          <div className="w-[90%]  py-2 lg:w-[23%] mx-auto mt-2 h-28 font-bold border-1 rounded-md bg-[#FBEDD2] ">
            <h1 className="mt-2 px-4 text-left">Pending Task</h1>
            <h2 className="mt-2 text-left px-4 h-10 text-xl text-gray-500">
              {pendingTasks}
            </h2>
            <div class="ml-3 px-4 w-[50%] rounded-sm h-3.5 bg-[#F0AD4E]"></div>
          </div>
          <div className="w-[90%]  py-2 lg:w-[23%] mx-auto h-28 mt-2 font-bold border-1 rounded-md bg-[#E0F6F4]">
            <h1 className="mt-2 px-4 text-left">Decline Task</h1>
            <h2 className=" mt-4 lg:mt-2 text-left px-4 h-10 text-xl text-gray-500">
              {declinedTasks}
            </h2>
            <div class="ml-3 px-4 w-[10%] rounded-sm h-3.5 bg-[#D9534F]"></div>
          </div>
        </div>

        {/* ---------- */}

        <div className="flex w-[100%] ">
          <div className=" lg:flex w-[100%] p-2 lg:p-4 lg:space-x-2">
            <div className=" md:w-[100%] lg:w-[60%] bg-white rounded-md">
              <h1 className="mt-4 text-left font-bold px-4">
                Total Task ratio
              </h1>
              <div className="lg:mx-auto">
                <Chart />
              </div>
            </div>
            <div className="w-[96%]  lg:w-[40%] items-center mt-2 md:mt-10  lg:justify-end ">
              <div className=" justify-center md:justify-end mt-2 lg-mt-0 bg-white rounded-md">
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
