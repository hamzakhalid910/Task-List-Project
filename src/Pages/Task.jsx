import React, { useState, useEffect } from "react";
import AddModal from "../Components/AddModal";
import TaskOptions from "../Components/TaskOptions";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import axios from "axios";
import DeleteTaskModal from "../Components/DeleteTaskModal";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);
  let [showAddModal, setShowAddModal] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState(""); // State for start date
  const [endDate, setEndDate] = useState(""); // State for end date
  const [loggedInUserId, setLoggedInUserId] = useState(""); // Assuming you set this state somewhere
  const [showOptions, setShowOptions] = useState(false);
  const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);
  const [userRole, setUserRole] = useState(null);

  function randomColor() {
    // Define arrays for the restricted colors
    var colors = [
      // Red
      [255, 0, 0],
      // Sky Blue
      [135, 206, 235],
      // Green
      [0, 128, 0],
      // Orange
      [255, 165, 0],
    ];

    // Choose a random color from the predefined array
    var randomIndex = Math.floor(Math.random() * colors.length);
    var selectedColor = colors[randomIndex];

    // Extract red, green, and blue values
    var red = selectedColor[0];
    var green = selectedColor[1];
    var blue = selectedColor[2];

    // Convert the values to hexadecimal and format them
    var colorHex =
      "#" +
      red.toString(16).padStart(2, "0") +
      green.toString(16).padStart(2, "0") +
      blue.toString(16).padStart(2, "0");

    return colorHex;
  }

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

  const handleOptionsClick = (taskId) => {
    setSelectedTaskId(taskId);
    setShowOptions(!showOptions);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to format date string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  function handleModalSubmit(data) {
    setSubmittedData([...submittedData, data]);
    setShowAddModal(false);
  }

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

  function fetchTasks() {
    {
      axios
        .get("http://localhost:3000/api/tasks/")
        .then((response) => {
          getUserIdFromToken();
          console.log(response.data);
          // Filter tasks based on logged-in user's ID
          console.log("User Role:", getUserRoleFromToken());
          setTimeout(() => {
            const userRole = getUserRoleFromToken();
            setUserRole(userRole);
          }, 2000);
          //  setUserRole(getUserRoleFromToken());
          console.log("New Role:", userRole);
          if (userRole === "user") {
            const filteredTasks = response.data.filter(
              (task) => task.user === loggedInUserId
            );
            console.log("Filtered Task:", filteredTasks);
            setTasks(filteredTasks);
          } else {
            setTasks(response.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching tasks:", error);
        });
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [loggedInUserId]);

  // Function to filter tasks based on search query and dates
  const filteredTasks = tasks.filter((task) => {
    // Filter by search query
    const searchMatch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by start and end dates if provided
    const startDateMatch = startDate
      ? new Date(task.startDate) >= new Date(startDate)
      : true;
    const endDateMatch = endDate
      ? new Date(task.endDate) <= new Date(endDate)
      : true;

    return searchMatch && startDateMatch && endDateMatch;
  });

  return (
    <div className="h-full">
      <Header pageName="Task" />
      <div className="flex h-[96%]">
        <Menu />
        <div className="w-[85%] bg-gray-100">
          <div className="md:flex mt-8 lg:mt-12 ml-2 lg:ml-8  ">
            <div className="w-[70%] md:w-[20%] ">
              <h1 className="ml-8 font-semibold text-lg text-left content-center py-2">
                Start date:
              </h1>
              <div className="w-[90%]">
                <input
                  className=" w-[100%] ml-8 h-12  rounded-md border-2 border-blue-200 p-2"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className=" w-[70%] md:w-[20%]">
              <div>
                <h2 className="ml-8 font-semibold text-lg text-left content-center py-2">
                  End date:
                </h2>
              </div>
              <div className="w-[90%] ">
                <input
                  className="w-[100%] ml-8 h-12 rounded-md border-2 border-blue-200 p-2"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Add Task Modal */}
            <div className="flex w-[60%]">
              <div className="w-[45%]"></div>
              <button
                className="lg:mx-auto"
                onClick={() => setShowAddModal(!showAddModal)}
              >
                <img
                  className="object-contain h-20 lg:h-12 w-[100%] md:w-[80%]"
                  src="src\Pages\Images\AddTask.png"
                  alt="Add Task"
                />
              </button>
            </div>
          </div>

          <div className="lg:ml-8 ">
            <h3 className="font-semibold text-left mt-8 ml-8 text-lg ">
              Enter Title:
            </h3>
            <div className="flex  ml-8  relative">
              <img
                className="absolute mt-7 ml-1 w-6 h-6"
                src="src\Pages\Images\Search.png"
                alt="Search Icon"
              />
              <input
                className="rounded rounded-l-md rounded-r-none pl-10 w-[70%] lg:w-[27.5%] h-12 mt-4 p-2 border-2 border-blue-200 border-r-none"
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                required
              />
              <button className="bg-[#4BCBEB] w-[22%] lg:w-[11.5%] rounded-l-none rounded-r-md h-12 mt-4">
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start lg:pl-8 mt-4 lg:space-x-8">
            {filteredTasks.map((task, index) => (
              <div
                key={index}
                className="bg-white h-96 mt-6  lg:ml-8 mb-6 mx-4 lg:mx-0 w-[96%] md:w-[45%] lg:w-[30%] border-2 border-sky-200 rounded-xl"
              >
                <div
                  style={{ backgroundColor: randomColor() }}
                  className="p-4 rounded-t-xl"
                ></div>
                <div className="flex ">
                  <h4 className="font-semibold font-gray-200 px-2 w-[90%] text-left">
                    Title:
                    <p className="mt-2 text-left "> {task.title}</p>
                  </h4>
                  <div className="relative">
                    <button
                      className="justify-end"
                      onClick={() => {
                        handleOptionsClick(task._id);
                      }}
                    >
                      <img
                        className="h-6 mx-auto justify-end mt-2"
                        src="src/Pages/Images/Options.png"
                        alt="Options"
                      />
                    </button>
                    {showOptions && selectedTaskId === task._id && (
                      <TaskOptions
                        showOptions={showOptions}
                        setShowOptions={setShowOptions}
                        taskId={task._id}
                      />
                    )}
                  </div>
                </div>
                <h5 className="font-bold mt-2 text-left px-2">Description:</h5>
                <p className="mt-2 text-left px-2"> {task.description}</p>
                <h6 className="font-bold mt-2 text-left px-2">Attachment</h6>
                <div className="flex justify-center items-center border-gray-400 rounded">
                  {console.log("Image attachemnet", task.attachment)}
                  <img
                    className=" border-blue-200 rounded w-[80%] h-32 mt-2 border-2"
                    src={"http://localhost:3000/uploads/" + task.attachment}
                    alt="Image"
                  />
                </div>
                <div className="flex w-[100%] mt-2">
                  <div className=" w-[50%] text-left pl-2">
                    <h7 className="font-bold">Start Date:</h7>
                    <p className="">{formatDate(task.startDate)}</p>
                  </div>
                  <div className="w-[50%] text-right pr-2">
                    <h7 className="font-bold px-3">End Date:</h7>
                    <p className="">{formatDate(task.endDate)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showAddModal && <AddModal onSubmit={handleModalSubmit} />}
        </div>
      </div>
    </div>
  );
}

export default Task;
