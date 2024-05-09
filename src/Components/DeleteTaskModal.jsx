import { useState } from "react";
import axios from "axios";

function DeleteTaskModal() {
  const [cross, setCross] = useState(true);

  const crossDisplay = () => {
    setCross(!cross);
  };

  taskId = "663bf599b886de5a53fea487";
  const handleTaskDelete = (taskId) => {
    console.log("before axios");
    console.log("task ID:", taskId);

    axios
      .delete(`http://localhost:3000/api/tasks/${taskId}`)
      .then((response) => {
        const updatedTasks = filteredTasks.filter(
          (task) => task._id !== taskId
        );
        setFilteredTasks(updatedTasks);
        if (selectedTaskId === taskId) {
          setSelectedTaskId(null);
        }
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  return (
    <>
      {cross && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
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
