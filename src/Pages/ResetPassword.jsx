import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import ResetPasswordImage from "./Images/ResetPassword.jpg";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 h-full bg-[#4BCBEB]">
        <img
          className="w-full h-full object-cover"
          src={ResetPasswordImage}
          alt="User Image"
        />
      </div>

      <div className="md:w-1/2 text-center bg-gray-100">
        <div className="max-w-md mx-auto py-12 px-6">
          <h2 className="text-2xl mt-8 text-left ml-2 font-bold">
            Reset Password
          </h2>
          <p className="text-sm text-left ml-2 mt-2 text-gray-500 ">
            To set a new password, please enter your new password below. Make
            sure it's secure, containing a combination of letters, numbers, and
            special characters.
          </p>

          <form className="mt-10 text-center space-y-4">
            <div className="flex justify-center items-center">
              <label className="relative flex imtems-center">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  className="p-2 pl-10 border-2 border-grey rounded-md w-96"
                  type="password"
                  placeholder="Enter Your New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </label>
            </div>

            <div className="flex justify-center items-center">
              <label className="relative flex imtems-center">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  className="p-2 pl-10 border-2 border-grey rounded-md w-96"
                  type="password"
                  placeholder="Confirm Your New Password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  required
                />
              </label>
            </div>

            <Link to="/login">
              <button
                className="text-white font-bold w-96 mt-10 border-2 rounded-md px-28 py-2 bg-[#4BCBEB] hover:bg-sky-700 py-3 text-lg"
                type="submit"
              >
                Update
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
