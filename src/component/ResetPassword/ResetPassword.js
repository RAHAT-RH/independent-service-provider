import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const handleEmail = (event) =>{
        setEmail(event.target.value)
    }
    
    const handleResetPassword = () => {
        
    }
    return (
        <div>
            <div className="login-container" style={{height: "400px"}}>
            <div className="login-title">Reset Password</div>
            <form  className="login-form">
                <input onChange={handleEmail} type="text" placeholder="Your Email" />
                {/* {errors?.emailError && <p className="error-message">{errors.emailError}</p>} */}
                <button type='submit'>Reset Password</button>
                
            </form>
            <ToastContainer theme="dark" />
        </div>
        </div>
    );
};

export default ResetPassword;