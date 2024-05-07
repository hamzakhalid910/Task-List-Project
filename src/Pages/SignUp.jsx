import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import signupImage from "./Images/SignUp.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const [passwordError, setPasswordError] = useState(""); // State to track password error message
  const [loading, setLoading] = useState(false); // State to track loading state
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (password.length < 8) {
        setPasswordError(
          "Your password is not strong enough, Use at least 8 characters"
        );
        return;
      }

      setLoading(true); // Set loading state to true

      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        {
          fullname,
          email,
          password,
        }
      );
      navigate("/login");
      console.log("Sign Up success:", response.data);
      // Handle success response
    } catch (error) {
      console.error("Sign Up error:", error.response.data);
      // Handle error response
    } finally {
      setLoading(false); // Set loading state to false after sign up attempt
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 8) {
      setPasswordError("");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 h-full bg-[#4BCBEB]">
        <img
          className="h-full w-full object-center"
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
                  className="p-2 pl-10 border-2 border-grey rounded-md w-80 sm:w-96 "
                  type="text"
                  placeholder="Enter your Full Name"
                  value={fullname}
                  name="fullname"
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
                  className="p-2 pl-10 border-2 border-grey rounded-md w-80 sm:w-96"
                  type="email"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>

            <br />

            <div className="flex justify-center items-center relative">
              <FaLock className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                className="p-2 pl-10 border-2 border-grey rounded-md w-80 sm:w-96"
                type={showPassword ? "text" : "password"} // Toggle input type based on password visibility state
                placeholder="Password"
                value={password}
                name="password"
                onChange={handlePasswordChange}
                required
              />

              {!showPassword ? (
                <FaEyeSlash
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>

            {passwordError && (
              <p className="text-left ml-2 text-red-500 text-md text-sm">
                {passwordError}
              </p>
            )}

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
                <span className="font-semibold text-black">
                  Terms & Conditions{" "}
                </span>
                and our{" "}
                <span className="font-semibold text-black">Privacy Policy</span>
              </label>
            </div>
            <br />

            <button
              className="relative w-80 sm:w-96 mt-2 border-2 rounded-md px-22  bg-[#4BCBEB] hover:bg-sky-700 text-white font-bold py-3 text-lg"
              type="submit"
              disabled={loading} // Disable button when loading
            >
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                </div>
              )}
              {!loading && "Sign Up"}
            </button>
          </form>
          <br />
          <span className=""> Already have an account?</span>
          <Link className="text-sky-500 px-2 font-bold" to="/login">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
