import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import signInImage from "./Images/SignIn.jpg";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 h-full bg-[#4BCBEB]">
        <img
          className="h-full w-full object-cover"
          src={signInImage}
          alt="User Image"
        />
      </div>

      <div className="md:w-1/2 text-center bg-gray-100">
        <div className="max-w-md mx-auto py-12 px-6">
          <h2 className="text-2xl mt-8 ml-2 font-bold text-left">
            Sign In to your account
          </h2>
          <p className="text-xs text-left ml-2 mt-2 text-gray-500">
            Welcome back! please enter your detail
          </p>

          <form className="mt-10 text-center space-y-2">
            <div className="flex justify-center items-center">
              <label className="relative flex imtems-center">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
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

            <br />

            <div className="flex justify-center items-center">
              <label className="relative flex items-center">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  className="p-2 pl-10 border-2 border-grey rounded-md w-96"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>

            <div className="flex-row  ">
              <input className="mr-0.5 py-2 " type="checkbox" id="rememberMe" />
              <label className="py-2 font-semibold" htmlFor="rememberMe">
                Remember me
              </label>
              <Link
                className="text-sky-400 ml-32 font-semibold  "
                to="/forgotpassword"
              >
                Forgot Password?
              </Link>
            </div>

            <br />

            <a href="/dashboard">
              <button className="mt-4 border-2 rounded-md px-28 py-2 bg-[#4BCBEB] hover:bg-sky-700 w-96 text-white font-bold py-3 text-lg">
                Sign In
              </button>
            </a>
          </form>
          <br />
          <span className="mt-4">Don't have an account?</span>
          <Link className="text-sky-400 mt-4 font-semibold ml-0.5" to="/">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
