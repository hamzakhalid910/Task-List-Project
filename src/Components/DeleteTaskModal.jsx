import { useState } from "react";

function DeleteTaskModal(onDelete) {
  const [isOpen, setIsOpen] = useState(true);

  const handleDelete = () => {
    // onDelete();
    
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
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
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={() => setIsOpen(false)}
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
