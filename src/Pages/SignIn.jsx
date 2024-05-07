import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import signInImage from "./Images/SignIn.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const [loading, setLoading] = useState(false); // State to track loading state

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error.message);
    } finally {
      setLoading(false); // Set loading state to false after sign up attempt
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 h-full bg-[#4BCBEB]">
        <img
          className="h-full w-full object-center"
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

          <form className="mt-10 text-center space-y-2" onSubmit={handleLogin}>
            <div className="flex justify-center items-center">
              <label className="relative flex imtems-center">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  className="p-2 pl-10 border-2 border-grey rounded-md w-80 sm:w-96"
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
                  className="p-2 pl-10 border-2 border-grey rounded-md w-80 sm:w-96"
                  type={showPassword ? "text" : "password"} // Toggle input type based on password visibility state
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              </label>
            </div>

            <div className="flex-row  ">
              <input className="mr-0.5 py-2 " type="checkbox" id="rememberMe" />
              <label className="py-2 font-semibold" htmlFor="rememberMe">
                Remember me
              </label>
              <Link
                className="text-sky-400 ml-14 lg:ml-32 font-semibold  "
                to="/forgotpassword"
              >
                Forgot Password?
              </Link>
            </div>

            <br />

            <button
              className="mt-4 border-2 rounded-md px-28 py-2 bg-[#4BCBEB] hover:bg-sky-700 w-80 sm:w-96 text-white font-bold py-3 text-lg relative"
              type="submit"
              disabled={loading}
              style={{ minHeight: "3rem" }} // Set minimum height to maintain button height
            >
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                </div>
              )}
              {!loading && "Sign In"}
            </button>
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
