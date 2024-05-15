import React from "react";
import { useState } from "react";
import axios from "axios";

export function UserEditModal({ UserId }) {
  const [cross, setCross] = useState(true);
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    role: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleUserEdit = async (e) => {
    e.preventDefault();
    try {
      console.log("STrat Try to edit user:", UserId);

      const response = await axios.put(
        `http://localhost:3000/api/users/${UserId}`,
        userData
      );
      console.log("User edited successfully:", response.data);
      setCross(false);
      //   onSubmit(updatedFormData);
      // onTaskAdded(response.data); // Pass the form data to handleModalSubmit
    } catch (error) {
      console.error(
        "Error editing user:",
        error.response?.data || error.message
      );
    }
  };

  const crossDisplay = () => {
    setCross(!cross);
  };

  return (
    <>
      {cross && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 overflow-hidden">
          <div className="bg-white p-6 rounded-xl border-2 h-[65%] ">
            <div className="flex ">
              <h2 className=" text-lg font-semibold mx-auto mb-2 mt-1">
                Edit User
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
                Fill the information below to edit user as per your requirment.
              </p>
            </div>

            <form onSubmit={handleUserEdit}>
              <div className="mb-4">
                <label
                  htmlFor="fullname"
                  className="text-left px-2 block mb-1 font-semibold"
                >
                  Enter User Name:
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter Full Name"
                  value={userData.fullname}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-1 px-3"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="value2"
                  className=" text-left px-2 block mb-1 font-semibold"
                >
                  User E-mail{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter E-mail"
                  value={userData.email}
                  onChange={handleChange}
                  className="w-full  border border-gray-300 rounded-md py-1 px-3"
                />
              </div>

              <label className=" mt-2 text-left px-2 block mb-1 font-semibold">
                User Role:
              </label>
              <input
                className="w-full border border-gray-300 rounded-md py-1 px-3"
                type="text"
                name="role"
                placeholder="User/Admin"
                onChange={handleChange}
                value={userData.role}
              ></input>
              <label className="mt-2 text-left px-2 block mb-1 font-semibold">
                Password:
              </label>
              <input
                className="w-full border border-gray-300 rounded-md py-1 px-3"
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="New Password"
                value={userData.password}
              ></input>

              <button
                type="submit"
                className="bg-[#4BCBEB] font-bold px-36 text-white py-2 px-4 mt-4 rounded-md"
              >
                Edit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
