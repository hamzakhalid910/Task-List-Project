import React, { useState } from "react";
import { Link } from "react-router-dom";
import signInImage from "./Images/SignIn.jpg";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#4BCBEB]">
        <img
          className="w-full h-100 object-cover"
          src={signInImage}
          alt="User Image"
        />
      </div>

      <div className="w-1/2 text-center">
        <h2 className="text-3xl	mt-24">Sign In to your account</h2>
        <p className="mt-1">Welcome back! please enter your detail</p>
        <br />

        <form className="text-center space-y-4">
          <input
            class="p-2 border-2 border-grey rounded-md w-72"
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
          <br />

          <input className="" type="checkbox" />

          <label className="" htmlFor="checkbox">
            Remember me
          </label>
          <br />

          <Link className="px-8 text-sky-400" to="/forgotpassword">
            Forgot Password?
          </Link>
          <br />

          <a href="/dashboard">
            <button className=" mt-4 border-2 rounded-md px-28 py-2  bg-[#4BCBEB] hover:bg-sky-700">
              Sign In
            </button>
          </a>
        </form>

        <text class="mt-4">Don't have an account?</text>

        <Link className="text-sky-400 mt-4" to="/">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
