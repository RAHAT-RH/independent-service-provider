import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../fireBase.init';
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.pathname || "/";

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        confirmPassError: ""
    })

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
   
    useEffect(()=>{
        if(user){
            toast('Create Account Successfully')
            navigate(from, {replace: true});
        }
    },[user])
   

    const handleEmail = (event) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validEmail = emailRegex.test(event.target.value)
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, emailError: "" })
        }
        else {
            setErrors({ ...errors, emailError: "Invalid Email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handlePassword = (event) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        const validPassWord = passwordRegex.test(event.target.value);
        if (validPassWord) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setErrors({ ...errors, passwordError: "'Invalid password' Mini six characters, at least one letter and one number" })
            setUserInfo({ ...userInfo, password: "" })
        }
    }

    const handleConfirmPassword = (event) => {
        if (event.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: event.target.value })
            setErrors({ ...errors, confirmPassError: "" })
        }
        else {
            setErrors({ ...errors, confirmPassError: "Password don't match" })
            setUserInfo({ ...userInfo, confirmPassword: "" })
        }
    }

    useEffect(() => {
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!");
                    break;
                default:
                    toast("something went wrong");
            }
        }
    }, [error]);


    // handle Form

    const handleForm = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        
    }


    return (
        <div className='bg'>
            <div className="login-container ">
                <div className="login-title">Sign up</div>
                <form onSubmit={handleForm} className="login-form">
                    <input onBlur={handleEmail} type="text" placeholder="Your Email" />
                    {errors?.emailError && <p className="error-message">{errors.emailError}</p>}

                    <input onBlur={handlePassword} type="password" placeholder="password" />
                    {errors?.passwordError && <p className="error-message">{errors.passwordError}</p>}

                    <input onBlur={handleConfirmPassword} type="password" placeholder="confirm password" />
                    {errors?.confirmPassError && <p className="error-message">{errors.confirmPassError}</p>}

                    <button type='submit'>Sign up</button>

                    {/* {error && <p className="error-message">{error}</p> } */}
                    {/* {hookError && <p className="error-message">{hookError?.message}</p>} */}
                    <ToastContainer theme='dark'/>
                </form>
                <button>Google Sign up</button>
            </div>
            
        </div>
    );
};

export default SignUp;