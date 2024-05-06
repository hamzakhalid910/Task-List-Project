import { useState } from "react";
import axios from "axios"; // Import Axios

function AddModal({ onClose }) {
  const [cross, setCross] = useState(true); // Define the cross state variable
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    attachment: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/tasks/addtask",
        formData
      );
      console.log("Task added successfully:", response.data);
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error adding task:", error.response.data);
    }
  };

  const crossDisplay = () => {
    setCross(!cross);
  };

  return (
    <>
      {cross && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-60">
          <div className="bg-white p-6 rounded-xl border-2 h-[92%]">
            <div className="flex ">
              <h2 className=" text-lg font-semibold mx-auto mb-2 mt-1">
                Add Task
              </h2>

              <button onClick={crossDisplay} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-2 mb-2">
              <p className="px-2">
                Fill the information below to add new task as per your
                requirment.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="text-left px-2 block mb-1 font-semibold"
                >
                  Enter Title:
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter Full Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-1 px-3"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="value2"
                  className=" text-left px-2 block mb-1 font-semibold"
                >
                  Description:{" "}
                  <span className="text-xs text-gray-400 font-normal">
                    (up to 255 characters)
                  </span>
                </label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Enter description text"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full h-24 border border-gray-300 rounded-md py-1 px-3"
                />
              </div>
              <label
                htmlFor="value3"
                className="text-left px-2 block mb-1 font-semibold"
              >
                Attachment:
              </label>
              <input
                type="file"
                name="attachment"
                value={formData.attachment}
                onChange={handleChange}
                className="content-center ml-18 w-full h-24 border border-gray-300 rounded-md py-1 px-3"
              />
              <div className="flex">
                <p className="text-xs text-gray-400">
                  Support format PNG, JPEJ
                </p>
                <p className="text-xs ml-48 text-gray-400">
                  Support format PNG, JPEJ
                </p>
              </div>
              <label className=" mt-2 text-left px-2 block mb-1 font-semibold">
                Start Date:
              </label>
              <input
                className="w-full border border-gray-300 rounded-md py-1 px-3"
                type="date"
                name="startDate"
                onChange={handleChange}
                value={formData.startDate}
                required
              ></input>
              <label className="mt-2 text-left px-2 block mb-1 font-semibold">
                End Date:
              </label>
              <input
                className="w-full border border-gray-300 rounded-md py-1 px-3"
                type="date"
                name="endDate"
                onChange={handleChange}
                value={formData.endDate}
                required
              ></input>

              <button
                type="submit"
                className="bg-[#4BCBEB] font-bold px-36 text-white py-2 px-4 mt-4 rounded-md"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddModal;
