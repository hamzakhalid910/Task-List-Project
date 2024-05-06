import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import ForgotPasswordImage from "./Images/ForgotPassword.jpg";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 h-full bg-[#4BCBEB]">
        <img
          className="w-full h-full object-cover"
          src={ForgotPasswordImage}
          alt="User Image"
        />
      </div>

      <div className="md:w-1/2 text-center bg-gray-100">
        <div className="max-w-md mx-auto py-12 px-6">
          <h2 className="text-2xl mt-8 text-left ml-2 font-bold">
            Reset your password
          </h2>
          <p className="text-sm text-left ml-2 mt-2 text-gray-500 ">
            Enter the email address associated with your account and we will
            send you a link to reset your password
          </p>
          <form className="mt-10 text-center space-y-4">
            <div className="flex justify-center items-center">
              <label className="relative flex imtems-center">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  className="p-2 pl-10 border-2 border-grey rounded-md w-96"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>
            <Link to="/resetpassword">
              <button
                className="text-white font-bold w-96 mt-10 border-2 rounded-md px-28 py-2 bg-[#4BCBEB] hover:bg-sky-700 py-3 text-lg"
                type="submit"
              >
                Continue
              </button>
            </Link>
          </form>
          <br />

          <Link className="font-bold text-sky-400 " to="/login">
            Back to Sign In
          </Link>
          <br />
          <div className="mt-10">
            <span>Don't have an account?</span>
            <Link className="text-sky-400 mt-4 px-2 font-bold" to="/">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
