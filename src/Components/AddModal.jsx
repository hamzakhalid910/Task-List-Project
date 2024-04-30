import { useState, React } from "react";

function AddModal({ onSubmit }) {
  const [data, setData] = useState();
  const [cross, setCross] = useState(true);
  function crossDisplay() {
    setCross(!cross);
  }
  const modalData = [
    {
      title: "",
      description: "",
      attachment: "",
      startDate: "",
      endDate: "",
    },
  ];
  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(data);
  };

  return (
    <>
      {cross && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-60">
          <div className="bg-white p-6 rounded-lg border-2 ">
            <div className="flex ">
              <h2 className=" text-xl font-bold mx-auto mb-4 mt-1">Add Task</h2>

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
              <p>
                Fill the information below to add new task as per your
                requirment.
              </p>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="text-left px-2 block mb-1 font-bold"
                >
                  Enter Title:
                </label>
                <input
                  type="text"
                  name="title"
                  value={modalData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-1 px-3"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="value2"
                  className=" text-left px-2 block mb-1 font-bold"
                >
                  Description:
                </label>
                <input
                  type="text"
                  name="description"
                  value={modalData.description}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-1 px-3"
                />
              </div>
              <label
                htmlFor="value3"
                className="text-left px-2 block mb-1 font-bold"
              >
                Attachment:
              </label>
              <input
                type="file"
                name="attachment"
                value={modalData.attachment}
                onChange={handleChange}
                className="content-center items-center w-full h-32 border border-gray-300 rounded-md py-1 px-3"
              />
              <div className="flex">
                <p className="text-xs">Support format PNG, JPEJ</p>
                <p className="text-xs ml-48">Support format PNG, JPEJ</p>
              </div>
              <label className=" mt-2 text-left px-2 block mb-1 font-bold">
                Start Date:
              </label>
              <input
                className="w-full border border-gray-300 rounded-md py-1 px-3"
                type="date"
                name="startDate"
                onChange={handleChange}
                value={modalData.startDate}
                required
              ></input>
              <label className="mt-2 text-left px-2 block mb-1 font-bold">
                End Date:
              </label>
              <input
                className="w-full border border-gray-300 rounded-md py-1 px-3"
                type="date"
                name="endDate"
                onChange={handleChange}
                value={modalData.endDate}
                required
              ></input>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 mt-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default AddModal;
