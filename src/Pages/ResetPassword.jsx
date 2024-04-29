import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import ResetPasswordImage from "./Images/ResetPassword.jpg";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#4BCBEB]">
        <img
          className="w-full h-full object-cover"
          src={ResetPasswordImage}
          alt="User Image"
        />
      </div>

      <div className="w-1/2 flex flex-col items-center mt-20">
        <h2 className="text-3xl">Reset Password</h2>
        <p className="mt-1 px-28 mb-8">
          To set a new password, please enter your new password below. Make sure
          it's secure, containing a combination of letters, numbers, and special
          characters.
        </p>

        <form className="space-y-4" action="">
          <div className="relative flex items-center">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              className="p-2 pl-10 border-2 border-grey rounded-md w-72"
              type="password"
              placeholder="Enter Your New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="relative flex items-center">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              className="p-2 pl-10 border-2 border-grey rounded-md w-72"
              type="password"
              placeholder="Confirm Your New Password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
          </div>

          <Link to="/login">
            <button
              className="border-2 rounded-md px-28 py-2 mt-4 bg-[#4BCBEB] hover:bg-sky-700"
              type="submit"
            >
              Update
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
