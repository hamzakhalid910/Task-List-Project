import { useState, React } from "react";
import AddModal from "../Components/AddModal";
import Header from "../Components/Header";
import Menu from "../Components/Menu";

function Task() {
  const [submittedData, setSubmittedData] = useState([]);
  let [showModal, setShowModal] = useState(false);
  const [showImage, setShowImage] = useState(false);

  function handleClick() {}

  function display() {
    setShowModal(!showModal);
  }

  function handleModalSubmit(data) {
    setSubmittedData([...submittedData, data]);
    setShowModal(false);
  }

  function getRandomColor() {
    const colors = ["red", "yellow", "orange", "pink", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  // console.log(getRandomColor());

  return (
    <div className="h-[96%]">
      <Header pageName="Task"></Header>
      <div className="flex h-[96%]">
        <Menu></Menu>
        <div className="w-[72%] border-1 bg-gray-100">
          <div className="flex mt-12 ml-8  ">
            <div className="flex  w-[70%] ">
              <h1 className="font-bold text-xl content-center p-2 ">
                Start date:
              </h1>
              <h2 className="font-bold text-xl content-center p-2 ml-32">
                End date:
              </h2>
            </div>
            <div className="flex  w-[30%] ">
              <button className="mx-auto" onClick={display}>
                <img
                  className="object-contain h-16 w-28 ml-18"
                  src="src\Pages\Images\AddTask.png"
                ></img>
              </button>
            </div>
          </div>

          <div className="flex">
            <input
              className="ml-8 w-[20%] h-12 mt-2 rounded-md border-2 p-2"
              type="date"
              required
            ></input>
            <input
              className="ml-16 w-[20%] h-12 mt-2 rounded-md border-2 p-2"
              type="date"
              required
            ></input>
          </div>

          <h3 className="font-bold text-left ml-8 mt-8 text-xl ">
            Enter Title:
          </h3>
          <div className="ml-8 flex border-1 border-blue-700 relative">
            <img
              className="absolute mt-7 ml-1 w-6 h-6"
              src="src\Pages\Images\Search.png"
              alt="Search Icon"
            />
            <input
              className="rounded rounded-l-md rounded-r-none pl-10 w-[36%] h-12 mt-4 p-2"
              type="search"
              placeholder="Search"
              required
            />
            <button className="bg-blue-200 w-[8%] rounded-l-none rounded-r-md h-12 mt-4">
              Search
            </button>
          </div>

          <div className="grid grid-cols-3 space-x-12 px-8 mt-4 border-1">
            {submittedData.map((data, index) => (
              <div
                key={index}
                className="h-96 border-2 border-gray-500 rounded"
              >
                <div className="p-4 bg-red-500"></div>
                <div className="flex ">
                  <h4 className="font-bold p-2 ">Title:</h4>
                  <button className="ml-auto " onClick={handleClick}>
                    <img
                      className="h-6"
                      src="src\Pages\Images\Options.png"
                    ></img>
                  </button>
                </div>
                <p className="mt-2 text-left px-2">{data.title}</p>

                <h5 className="font-bold mt-2 text-left px-2">Description:</h5>
                <p className="mt-2 text-left px-2"> {data.description}</p>
                <h6 className="font-bold mt-2 text-left px-2">Attachment</h6>
                <div className="flex justify-center items-center border-gray-400 rounded">
                  <img
                    className=" border-gray-400 rounded w-60 h-28"
                    src="public\assets\image 7.png"
                    alt="Image"
                  />
                  {console.log("Image here", data.attachment)}
                </div>
                <div className="flex">
                  <h7 className="font-bold px-2 ">Start Date:</h7>
                  <h8 className="font-bold ml-20">End Date:</h8>
                </div>
                <div className="flex">
                  <p>{data.startDate}</p>
                  <p>{data.endDate}</p>
                </div>
              </div>
            ))}
          </div>
          <div>{showModal && <AddModal onSubmit={handleModalSubmit} />}</div>
        </div>
      </div>
    </div>
  );
}
export default Task;
