import React, { useState } from "react";
import AddModal from "../Components/AddModal";
import Header from "../Components/Header";
import Menu from "../Components/Menu";

function Task() {
  const [submittedData, setSubmittedData] = useState([]);
  let [showModal, setShowModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick1 = () => {
    setIsOpen(!isOpen);
  };

  function display() {
    setShowModal(!showModal);
  }

  function handleModalSubmit(data) {
    setSubmittedData([...submittedData, data]);
    setShowModal(false);
  }

  return (
    <div className="h-screen">
      <Header pageName="Task" />
      <div className="flex h-[96%]">
        <Menu />
        <div className="w-[72%] bg-gray-100">
          <div className="flex mt-12 ml-8 border-2 ">
            <div className="flex  w-[70%] border-2">
              <h1 className="font-semibold text-lg text-left content-center p-2 ">
                Start date:
              </h1>
              <h2 className="font-semibold text-lg text-left content-center p-2 ml-24">
                End date:
              </h2>
            </div>
            <div className="flex w-[30%] ">
              <button className="mx-auto" onClick={display}>
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

          <div className="ml-8 border-2">
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
                required
              />
              <button className="bg-[#4BCBEB] w-[11.5%] rounded-l-none rounded-r-md h-12 mt-4">
                Search
              </button>
            </div>
          </div>

          <div className="flex  justify-between px-8 mt-4">
            <div className="h-96 w-[32%] border-2 border-sky-200 rounded">
              <div className="p-4 bg-red-400"></div>
              <div className="flex ">
                <h4 className="font-bold p-2 ">Title:</h4>
                <div className="relative">
                  <button className="" onClick={handleClick1}>
                    <img
                      className="h-6 ml-44 mt-2"
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
              <p className="mt-2 text-left px-2">Task 1</p>

              <h5 className="font-bold mt-2 text-left px-2">Description:</h5>
              <p className="mt-2 text-left px-2"> Descriprtion 1</p>
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
                <h8 className="font-bold ml-20">End Date:</h8>
              </div>
              <div className="flex">
                <p className="ml-2">12/12/1212</p>
                <p className="ml-20">12/12/12</p>
              </div>
            </div>
            <div className="h-96 w-[32%] border-2 border-sky-200 rounded">
              <div className="p-4 bg-green-400"></div>
              <div className="flex ">
                <h4 className="font-bold p-2 ">Title:</h4>
                <div className="relative">
                  <button className="" onClick={handleClick1}>
                    <img
                      className="h-6 ml-44 mt-2"
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
              <p className="mt-2 text-left px-2">Task 1</p>
              <h5 className="font-bold mt-2 text-left px-2">Description:</h5>
              <p className="mt-2 text-left px-2"> Descriprtion 1</p>
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
                <h8 className="font-bold ml-20">End Date:</h8>
              </div>
              <div className="flex">
                <p className="ml-2">12/12/1212</p>
                <p className="ml-20">12/12/12</p>
              </div>{" "}
            </div>
            <div className="h-96 w-[32%] border-2 border-sky-200 rounded">
              <div className="p-4 bg-orange-400"></div>
              <div className="flex ">
                <h4 className="font-bold p-2 ">Title:</h4>
                <div className="relative">
                  <button className="" onClick={handleClick1}>
                    <img
                      className="h-6 ml-44 mt-2"
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
              <p className="mt-2 text-left px-2">Task 1</p>
              <h5 className="font-bold mt-2 text-left px-2">Description:</h5>
              <p className="mt-2 text-left px-2"> Descriprtion 1</p>
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
                <h8 className="font-bold ml-20">End Date:</h8>
              </div>
              <div className="flex">
                <p className="ml-2">12/12/1212</p>
                <p className="ml-20">12/12/12</p>
              </div>{" "}
            </div>
          </div>
          {showModal && <AddModal onSubmit={handleModalSubmit} />}
        </div>
      </div>
    </div>
  );
}

export default Task;
