import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { UserEditModal } from "./UserEditModal";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
};

function UserList() {
  const [showDropdownIndex, setShowDropdownIndex] = useState(null);
  const [users, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(7);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showEditUserModal, setShowEditUserModal] = useState(false);

  // const handleClose = (crossState) => {
  //   console.log("Cross state from modal:", crossState);
  //   // Handle cross state change here if needed
  // };

  useEffect(() => {
    fetchUsers();
    // setIsLoading(false);
  }, [users]);

  const fetchUsers = async () => {
    // setIsLoading(true);
    try {
      const userResponse = await axios.get("http://localhost:3000/api/users");
      setTimeout(() => {
        setUser(userResponse.data);
        setIsLoading(false);
      }, 500);
      // setUser(userResponse.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Delay hiding loader for 1 second
    }
  };

  const handleImageClick = (index) => {
    setShowDropdownIndex(index === showDropdownIndex ? null : index);
  };

  const handleActionClick = (action, user) => {
    switch (action) {
      case "delete":
        console.log("Delete user at index:", user);
        setIsLoading(true);
        axios
          .delete(`http://localhost:3000/api/users/${user}`)
          .then((response) => {
            console.log("user deleted:", response.data);

            setShowDropdownIndex(!showDropdownIndex);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log("Error deleting user:", error);
          });

        break;

      case "edit":
        setShowDropdownIndex(!showDropdownIndex);
        setShowEditUserModal(!showEditUserModal);
        console.log("Edit user at index:", user);
        console.log("modal value", showEditUserModal);

        break;
      default:
        break;
    }
  };

  // Get current tasks
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="w-[85%] h-screen bg-gray-100 x-4 py-2 flex ">
        {isLoading && (
          <div className="absolute top-[50%] left-[50%] transform translate(-50%, -50%)">
            <CircularProgress />
          </div>
        )}
        <div className="flex-wrap mx-auto my-auto w-[94%] bg-white h-[90%] rounded-xl border-2 border-blue-100">
          <h1 className="text-left font-bold py-2 ml-5 text-xl">Online User</h1>
          <div className="flex w-[100%] font-semibold text-left ml-4">
            <div className="flex w-[25%] py-2 items-center ">User ID</div>
            <div className="flex w-[25%] py-2 items-center ">User Name</div>
            <div className="flex w-[25%] py-2 items-center">User Email</div>
            <div className="flex w-[25%] py-2 items-center">User Role</div>
          </div>
          <div className="bg-green w-[100%] rounded-md ">
            {currentUsers.map((users, index) => (
              <div key={index} className="flex w-[100%] rounded-md ml-4">
                <div className=" flex border-b w-[25%] items-center py-2">
                  {users._id}
                </div>
                <div className="underline border-b text-blue-500 flex w-[25%] items-center py-2.5 ">
                  {users.fullname}{" "}
                </div>
                <div className=" flex w-[25%] border-b items-center py-2">
                  {users.email}
                </div>
                <div className=" flex w-[25%] border-b items-center py-2 ">
                  <div className="flex w-[25%]  items-center py-2 ">
                    {users.role}
                  </div>

                  <div className=" flex w-[25%] justify-center   relative">
                    <img
                      src="src\Pages\Images\Options.png"
                      alt="Image"
                      className="ml-6 w-6 h-6"
                      onClick={() => {
                        handleImageClick(index);
                      }}
                    />
                    {showDropdownIndex === index && (
                      <div className="absolute ml-28 w-25 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        <button
                          className="block w-full py-2 text-left px-4 hover:bg-gray-100"
                          onClick={() => handleActionClick("delete", users._id)}
                        >
                          Delete
                        </button>

                        <button
                          className="block w-full py-2 text-left px-4 hover:bg-gray-100"
                          onClick={() => {
                            setSelectedUserId(users._id);
                            handleActionClick("edit", users._id);
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    )}
                  </div>
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
                  {[
                    ...Array(Math.ceil(users.length / usersPerPage)).keys(),
                  ].map((number) => (
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
                  ))}
                </ul>
              </div>
              <div className="w-[32%]">
                <p className=" text-rght text-gray-500 ml-4 text-sm">
                  Go to page _____
                </p>
              </div>
            </div>
          </div>
          {showEditUserModal && <UserEditModal UserId={selectedUserId} />}
        </div>
      </div>
    </>
  );
}

export default UserList;
