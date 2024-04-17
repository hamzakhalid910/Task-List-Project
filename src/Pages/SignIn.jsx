import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  return (
    <>
      <h2>Sign In to your account</h2>
      <p>Welcome back! please enter your detail</p>
      <br />
      <form className="bg-blue-500">
        <input type="email" placeholder="Email" value={email} required />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
        />
        <br />
        <input type="checkbox" />
        <label htmlFor="checkbox">Remember me</label>
        <Link to="/forgotpassword"> Forgot Password?</Link>
        <br />
        <Link to="/dashboard">
          <button>Sign In</button>
        </Link>
      </form>

      <label htmlFor="">Don't have an account?</label>
      <Link to="/">Sign Up</Link>
    </>
  );
}

export default SignIn;
