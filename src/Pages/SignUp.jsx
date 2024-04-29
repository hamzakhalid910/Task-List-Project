import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import signupImage from "./Images/SignUp.jpg";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(`Name: ${fullName}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="flex">
      <div className="w-1/2 bg-[#4BCBEB]">
        <img
          className="w-full h-100 object-cover"
          src={signupImage}
          alt="User Image"
        />
      </div>

      <div className="w-1/2 bg-white text-center">
        <h1 className="text-2xl mt-20">Sign Up for an Account</h1>

        <form className="mt-10 box-border space-y-4" onSubmit={handleSignup}>
          <div className="flex justify-center items-center">
            <label className="relative flex items-center">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                className="p-2 pl-10 border-2 border-grey rounded-md w-72"
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
                className="p-2 pl-10 border-2 border-grey rounded-md w-72"
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
                className="p-2 pl-10 border-2 border-grey rounded-md w-72"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>

          <p className="mx-0.5">
            Your password must have at least 8 characters
          </p>

          <input className="mx-4 ml-2" type="checkbox" name="signUpCheckBox" />
          <label className="px-2 " htmlFor="signUpCheckbox">
            By creating an account means you agree to the Terms & Conditions and
            our Privacy Policy
          </label>
          <br />

          <Link to="/login">
            <button className="mt-2 border-2 rounded-md px-28 py-2 bg-[#4BCBEB] hover:bg-sky-700">
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
  );
}

export default SignUp;
