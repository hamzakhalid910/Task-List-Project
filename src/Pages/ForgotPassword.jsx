import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import ForgotPasswordImage from "./Images/ForgotPassword.jpg";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#4BCBEB]">
        <img
          className="w-full h-full object-cover"
          src={ForgotPasswordImage}
          alt="User Image"
        />
      </div>

      <div className="w-1/2 flex flex-col mt-20 items-center">
        <h2 className="text-3xl">Reset your password</h2>
        <p className="mt-1 px-28 mb-8">
          Enter the email address associated with your account and we will send
          you a link to reset your password
        </p>
        <form className="space-y-4">
          <div className="relative flex items-center">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              className="p-2 pl-10 border-2 border-grey rounded-md w-72"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </form>
        <br />

        <Link to="/resetpassword">
          <button
            className="border-2 rounded-md px-28 py-2 bg-[#4BCBEB] hover:bg-sky-700"
            type="submit"
          >
            Continue
          </button>
        </Link>

        <br />

        <Link className="text-sky-400 mt-4" to="/login">
          Back to Sign In
        </Link>
        <span className="mt-4">Don't have an account?</span>
        <Link className="text-sky-400 mt-4 px-2" to="/">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
