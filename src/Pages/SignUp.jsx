import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import signupImage from "./Images/SignUp.jpg";
import axios from "axios"; // Import Axios

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     "http://localhost:3000/api/users/register",
    //     {
    //       fullName,
    //       email,
    //       password,
    //     }
    //   );
    //   console.log("Sign Up success:", response.data);
    //   // Handle success response
    // } catch (error) {
    //   console.error("Sign Up error:", error.response.data);
    //   // Handle error response
    // }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 h-full bg-[#4BCBEB]">
        <img
          className="h-full w-full object-cover"
          src={signupImage}
          alt="User Image"
        />
      </div>

      <div className="md:w-1/2 text-center bg-gray-100">
        <div className="max-w-md mx-auto py-12 px-6">
          <h1 className="text-2xl mt-8 font-bold text-left ml-2">
            Sign Up for an Account
          </h1>
          <form className="mt-10 box-border space-y-2" onSubmit={handleSignup}>
            <div className="flex justify-center items-center">
              <label className="relative flex items-center">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  className="p-2 pl-10 border-2 border-grey rounded-md w-96"
                  type="text"
                  placeholder="Enter your Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </label>
            </div>

            <br />

            <div className="flex justify-center items-center">
              <label className="relative flex items-center">
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

            <p className=" text-left ml-2 text-md text-gray-500 text-sm">
              Your password must have at least 8 characters
            </p>
            <br />
            <div className="mx-2 flex-row">
              <input
                className="mr-0.5 py-2"
                type="checkbox"
                name="signUpCheckBox"
              />
              <label
                className="my-auto py-2 text-gray-500 text-smtext"
                htmlFor="signUpCheckbox"
              >
                By creating an account means you agree to the{" "}
                <span className="font-bold text-black">
                  Terms & Conditions{" "}
                </span>
                and our{" "}
                <span className="font-bold text-black">Privacy Policy</span>
              </label>
            </div>
            <br />

            <Link to="/login">
              <button className="w-96 mt-2 border-2 rounded-md px-28 py-2 bg-[#4BCBEB] hover:bg-sky-700 text-white font-bold py-3 text-lg">
                Sign Up
              </button>
            </Link>
          </form>
          <br />
          <span className=""> Already have an account?</span>
          <Link className="text-sky-500 px-2" to="/login">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
