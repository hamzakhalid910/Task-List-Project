import React, { useState } from "react";
import { Link } from "react-router-dom";
import ResetPasswordImage from "./Images/ResetPassword.jpg";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#4BCBEB]">
        <img
          className="w-full h-100 object-cover"
          src={ResetPasswordImage}
          alt="User Image"
        />
      </div>

      <div className="w-1/2 text-center">
        <h2 className="text-3xl	mt-24">Reset Password</h2>
        <p className="mt-1 px-2 mb-8">
          To set a new password, please enter you new password below. Make sure
          it's secure, containing a combination of letters, numbers, and special
          characters.
        </p>

        <form className="space-y-4" action="">
          <input
            class="p-2 border-2 border-grey rounded-md w-72"
            type="password"
            placeholder="Enter Your New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            class="p-2 border-2 border-grey rounded-md w-72"
            type="password"
            placeholder="Confirm Your New Password"
            value={confirmNewPassword}
            required
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <a href="/login">
            <button
              className="border-2 rounded-md px-28 py-2 mt-4 bg-[#4BCBEB] hover:bg-sky-700"
              type="submit"
            >
              Update
            </button>
          </a>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
