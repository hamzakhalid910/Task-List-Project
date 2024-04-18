import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

// import { useHistory } from "react-router-dom";

import signupImage from "./Images/SignUp.jpg";

function SignUp() {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // const history = useHistory();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(`Name: ${fullName}, Email: ${email}, Password: ${password}`);
    // history.push("/login");
  };

  return (
    <div className="bg-[grey] flex h-screen">
      <div className="w-1/2 bg-[#4BCBEB]">
        <img
          className="w-full h-100 object-cover"
          src={signupImage}
          alt="User Image"
        />
      </div>

      <div className="w-1/2 bg-white text-center">
        <h1 class="text-2xl mt-20">Sign Up for an Account</h1>

        <form class="mt-10 box-border space-y-4" onSubmit={handleSignup}>
          <label className="relative ">
            <FaUser className="absolute" />

            <input
              className="p-2 border-2 border-grey rounded-md w-72"
              type="text"
              placeholder="Enter your Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>
          <br />

          <input
            className="p-2 border-2 border-grey rounded-md w-72"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />

          <input
            className="p-2 border-2 border-grey rounded-md w-72"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="mx-0.5">Your password must have atleast 8 characters</p>

          <input className=" mx-4" type="checkbox" name="signUpCheckBox" />
          <label htmlFor="signUpCheckbox">
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
        <text className=""> Already have an account?</text>
        <Link className="text-sky-500 px-2" to="/login">
          Log In
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
