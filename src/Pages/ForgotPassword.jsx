import React, { useState } from "react";
import { Link } from "react-router-dom";
import ForgotPasswordImage from "./Images/ForgotPassword.jpg";

function ForgotPassword() {
  const [email, setEmail] = useState();

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#4BCBEB]">
        <img
          className="w-full h-100 object-cover"
          src={ForgotPasswordImage}
          alt="User Image"
        />
      </div>

      <div className="w-1/2 text-center">
        <h2 className="text-3xl	mt-24">Reset your password</h2>
        <p className="mt-1 px-2 mb-8">
          Enter the email address associated with your account and we will send
          you a link to reset your password
        </p>
        <form className="space-y-4">
          <input
            class="p-2 border-2 border-grey rounded-md w-72"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </form>
        <br />

        <Link to="/resetpassword">
          <button
            className="border-2 rounded-md px-28 py-2  bg-[#4BCBEB] hover:bg-sky-700"
            type="submit"
          >
            Continue
          </button>
        </Link>

        <br />
        <br />
        <Link className="text-sky-400 mt-4" to="/login">
          Back to Sign In
        </Link>
        <br />
        <text>Dont have an account?</text>
        <Link className="text-sky-400 mt-4 px-2" to="/">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
