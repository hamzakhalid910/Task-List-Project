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

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/tasks/")
      .then((response) => {
        getUserIdFromToken();
        console.log(response.data);
        // Filter tasks based on logged-in user's ID
        const filteredTasks = response.data.filter(
          (task) => task.user === loggedInUserId
        );
        console.log(filteredTasks);
        setTasks(filteredTasks);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
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
        <div className="w-[85%] border-2 bg-gray-100">
          <div className="flex mt-12 ml-8 border-2 ">
            <div className="border-green-500 w-[20%] ">
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

            <div className=" border-green-500 w-[20%]">
              <div>
                <h2 className="ml-8 font-semibold text-lg text-left content-center py-2">
                  End date:
                </h2>
              </div>
              <div className="w-[90%]">
                <input
                  className="ml-8 h-12 rounded-md border-2 border-blue-200 p-2"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Add Task Modal */}
            <div className="flex w-[30%] ">
              <button
                className="mx-auto"
                onClick={() => setShowAddModal(!showAddModal)}
              >
                <img
                  className="object-contain h-12 w-32 ml-18"
                  src="src\Pages\Images\AddTask.png"
                  alt="Add Task"
                />
              </button>
            </div>
          </div>

          <div className="ml-8 ">
            <h3 className="font-semibold text-left mt-8 text-lg ">
              Enter Title:
            </h3>
            <div className="flex border-1 border-blue-700 relative">
              <img
                className="absolute mt-7 ml-1 w-6 h-6"
                src="src\Pages\Images\Search.png"
                alt="Search Icon"
              />
              <input
                className="rounded rounded-l-md rounded-r-none pl-10 w-[34%] h-12 mt-4 p-2"
                type="search"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                required
              />
              <button className="bg-[#4BCBEB] w-[11.5%] rounded-l-none rounded-r-md h-12 mt-4">
                Search
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-between px-8 mt-4 space-x-4">
            {filteredTasks.map((task, index) => (
              <div
                key={index}
                className="bg-white h-96 mt-6 mx-2 w-[96%] lg:w-[31%] border-2 border-sky-200 rounded-xl"
              >
                <div className="p-4 bg-orange-400 rounded-t-xl"></div>
                <div className="flex ">
                  <h4 className="font-bold p-2 w-[90%] text-left">
                    Title: {task.title}
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
                        taskId={task._id}
                      />
                    )}
                  </div>
                </div>
                <p className="mt-2 text-left px-2">Task {index + 1}</p>
                <h5 className="font-bold mt-2 text-left px-2">Description:</h5>
                <p className="mt-2 text-left px-2"> {task.description}</p>
                <h6 className="font-bold mt-2 text-left px-2">Attachment</h6>
                <div className="flex justify-center items-center border-gray-400 rounded">
                  <img
                    className=" border-gray-400 rounded w-60 h-28"
                    src="public\assets\image 7.png"
                    alt="Image"
                  />
                </div>
                <div className="flex">
                  <h7 className="font-bold px-2 ">Start Date:</h7>
                  <h7 className="font-bold ml-44">End Date:</h7>
                </div>
                <div className="flex">
                  <p className="ml-2">{formatDate(task.startDate)}</p>
                  <p className="ml-44">{formatDate(task.endDate)}</p>
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
