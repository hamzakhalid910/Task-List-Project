import React, { useState } from "react";
import DeleteTaskModal from "./DeleteTaskModal";

function TaskOptions({ showOptions }) {
  const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);

  return (
    <>
      {showOptions && (
        <div className="px-2 absolute top-8 right-0 bg-white border border-gray-300 rounded shadow-md">
          <ul>
            <li className="px-4">
              <button
                onClick={() => {
                  console.log("Delete button clicked");
                  console.log("Before:", showDeleteTaskModal);
                  setShowDeleteTaskModal(
                    (prevshowDeleteTaskModal) => !prevshowDeleteTaskModal
                  );
                  console.log("After:", showDeleteTaskModal);
                }}
              >
                Delete
              </button>
            </li>
            <li>
              <button onClick={() => console.log("View clicked")}>View</button>
            </li>
            <li>
              <button onClick={() => console.log("Edit clicked")}>Edit</button>
            </li>
          </ul>
        </div>
      )}
      {showDeleteTaskModal && <DeleteTaskModal />}
    </>
  );
}

export default TaskOptions;
