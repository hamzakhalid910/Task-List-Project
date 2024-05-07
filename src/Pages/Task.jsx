import React, { useState, useEffect } from "react";
import AddModal from "../Components/AddModal";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import axios from "axios";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);
  let [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to filter tasks based on search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to format date string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  function handleModalSubmit(data) {
    setSubmittedData([...submittedData, data]);
    setShowModal(false);
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  return (
    <div className="h-full">
      <Header pageName="Task" />
      <div className="flex h-[96%]">
        <Menu />
        <div className="w-[85%] bg-gray-100">
          <div className="flex mt-12 ml-8  ">
            <div className="flex  w-[70%] ">
              <h1 className="font-semibold text-lg text-left content-center p-2 ">
                Start date:
              </h1>
              <h2 className="font-semibold text-lg text-left content-center p-2 ml-24">
                End date:
              </h2>
            </div>
            <div className="flex w-[30%] ">
              <button
                className="mx-auto"
                onClick={() => setShowModal(!showModal)}
              >
                <img
                  className="object-contain h-12 w-32 ml-18"
                  src="src\Pages\Images\AddTask.png"
                  alt="Add Task"
                />
              </button>
            </div>
          </div>

          <div className="flex">
            <input
              className="ml-8 w-[20%] h-12 rounded-md border-2 p-2"
              type="date"
              required
            />
            <input
              className="ml-8 w-[20%] h-12 rounded-md border-2 p-2"
              type="date"
              required
            />
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
                  <div className="relative ">
                    <button
                      className="justify-end"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <img
                        className=" h-6 mx-auto justify-end  mt-2"
                        src="src/Pages/Images/Options.png"
                        alt="Options"
                      ></img>
                    </button>
                    {isOpen && (
                      <div className="px-2 absolute top-8 right-0 bg-white border border-gray-300 rounded shadow-md">
                        <ul>
                          <li className="border-b px-4">
                            <button onClick={() => console.log("Edit clicked")}>
                              Edit
                            </button>
                          </li>
                          <li>
                            <button onClick={() => console.log("Add clicked")}>
                              Add
                            </button>
                          </li>
                        </ul>
                      </div>
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
                  <h8 className="font-bold ml-44">End Date:</h8>
                </div>
                <div className="flex">
                  <p className="ml-2">{formatDate(task.startDate)}</p>
                  <p className="ml-44">{formatDate(task.endDate)}</p>
                </div>
              </div>
            ))}
          </div>

          {showModal && <AddModal onSubmit={handleModalSubmit} />}
        </div>
      </div>
    </div>
  );
}

export default Task;
