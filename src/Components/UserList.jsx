import React, { useState, useEffect } from "react";
import axios from "axios";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
};

function UserList() {
  const [showDropdownIndex, setShowDropdownIndex] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(10);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const taskResponse = await axios.get("http://localhost:3000/api/tasks");
      setTasks(taskResponse.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const calculateDaysLeft = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInMs = end - start;
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

  const handleImageClick = (index) => {
    setShowDropdownIndex(index === showDropdownIndex ? null : index);
  };

  const handleActionClick = (action, index) => {
    switch (action) {
      case "delete":
        console.log("Delete user at index:", index);
        break;
      case "view":
        console.log("View user at index:", index);
        break;
      case "edit":
        console.log("Edit user at index:", index);
        break;
      default:
        break;
    }
  };

  // Get current tasks
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-[85%] bg-gray-100 x-4 py-2 h-screen flex ">
      <div className="flex-wrap mx-auto my-auto w-[94%] bg-white h-[90%] rounded-xl border-2 border-blue-100">
        <h1 className="text-left font-bold text-lg py-2 ml-5 text-xl">
          Online User
        </h1>
        <div className="flex w-[100%] font-semibold text-left ml-4">
          <div className="flex w-[20%] py-2 items-center px-2">
            Customer Name
          </div>
          <div className="flex w-[20%] py-2 items-center ">Project Name</div>
          <div className="flex w-[20%] py-2 items-center">Task Start Date</div>
          <div className="flex w-[20%] py-2 items-center">Task End Date</div>
          <div className="flex w-[20%] py-2 item-center">OverDue Day</div>
        </div>
        <div className="bg-green w-[100%] rounded-md ">
          {currentTasks.map((task, index) => (
            <div key={index} className="flex w-[100%] rounded-md ml-4">
              <div className="underline text-blue-500 flex w-[20%]  border-b items-center py-2.5 px-6">
                {task.title}{" "}
              </div>
              <div className=" flex w-[20%] border-b items-center py-2 px-4">
                {task.description}
              </div>
              <div className=" flex w-[20%] border-b items-center py-2 px-4">
                {formatDate(task.startDate)}
              </div>
              <div className=" flex w-[20%] border-b items-center py-2 px-4">
                {formatDate(task.endDate)}
              </div>
              <div className=" flex w-[20%] border-b items-center py-2 px-4 relative">
                {calculateDaysLeft(task.startDate, task.endDate)} Day's
                <img
                  src="src\Pages\Images\Options.png"
                  alt="Image"
                  className="ml-6 w-6 h-6"
                  onClick={() => handleImageClick(index)}
                />
                {showDropdownIndex === index && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <button
                      className="block w-full py-2 text-left px-4 hover:bg-gray-100"
                      onClick={() => handleActionClick("delete", index)}
                    >
                      Delete
                    </button>
                    <button
                      className="block w-full py-2 text-left px-4 hover:bg-gray-100"
                      onClick={() => handleActionClick("view", index)}
                    >
                      View
                    </button>
                    <button
                      className="block w-full py-2 text-left px-4 hover:bg-gray-100"
                      onClick={() => handleActionClick("edit", index)}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          <br />
          <div className="flex ">
            <p className="w-[32%] text-left text-gray-500 ml-8 text-sm">
              Rows per page 10
            </p>
            <div className="flex w-[32%]  justify-center">
              <ul className="flex">
                {[...Array(Math.ceil(tasks.length / tasksPerPage)).keys()].map(
                  (number) => (
                    <li key={number}>
                      <button
                        onClick={() => paginate(number + 1)}
                        className={`${
                          currentPage === number + 1
                            ? "bg-blue-500 text-white"
                            : "text-blue-500"
                        } hover:bg-blue-400 hover:text-white px-3 py-1 mx-1 rounded`}
                      >
                        {number + 1}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="w-[32%]">
              <p className=" text-rght text-gray-500 ml-4 text-sm">
                Go to page _____
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
