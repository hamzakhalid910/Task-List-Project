import { useState } from "react";
import axios from "axios";

function DeleteTaskModal({ taskId }) {
  const [cross, setCross] = useState(true);
  const [filteredTasks, setFilteredTasks] = useState();

  const crossDisplay = () => {
    setCross(!cross);
  };

  const handleTaskDelete = () => {
    console.log("task ID - DeleteModal:", taskId);
    axios
      .delete(`http://localhost:3000/api/tasks/${taskId}`)
      .then((response) => {
        setCross(!cross);
        const updatedTasks = filteredTasks.filter(
          (task) => task._id !== taskId
        );
        setFilteredTasks(updatedTasks);
        
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  return (
    <>
      {cross && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0  bg-black opacity-80"></div>
          <div className="relative bg-white p-8 rounded shadow-lg">
            <div className="absolute top-0 right-0 p-4"></div>
            <p className="text-lg font-bold mb-4">
              Are you sure you want to delete?
            </p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleTaskDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={crossDisplay}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteTaskModal;
