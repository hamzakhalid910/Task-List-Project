import React, {useState} from "react";
import { Link } from "react-router-dom";



function ForgotPassword(){
const [email, setEmil] = useState();

    return(
        <>
        <h2>Reset your password</h2>
        <p>Enter the email address associated with your account and 
            we will send you a link to reset your password</p>
            <form >
            <input type="email" placeholder="Email" value={email} required />
            </form>
            <br />

            <Link to="/resetpassword">
            <button type="submit">Continue</button>
            </Link>

            <br />
            <br />
            <Link to="/login">Back to Sign In</Link>

            <p>Dont have an account?</p>
            <Link to="/">Sign Up</Link>
            </>

    );
}

export default ForgotPassword;