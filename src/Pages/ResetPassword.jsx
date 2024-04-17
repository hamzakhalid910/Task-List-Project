import React,{usestate} from "react";

function ResetPassword(){
const [newPassword,setnewpassword] = usestate();
const [confirmNewPassword,setConfirmNewPassword] = useState();

    return (
        <>
        <h2>Reset Password</h2>
        <p>To set a new password, please enter you new password below. 
            Make sure it's secure, containing a combination of letters, 
            numbers, and special characters.</p>

            <form action="">
                <input type="password" placeholder="Enter Your New Password" value={newPassword} required />
                <input type="password" placeholder= "Confirm Your New Password" value={confirmNewPassword} required />
                <button type="submit">Update</button>
            </form>
        </>
    );
}

export default ResetPassword;