import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../fireBase.init';

const LogIn = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        other: ""
    })

    useEffect(() => {
        if (user) {
            toast('Log In Successfully');
            navigate(from, {replace: true});
        }
    }, [user])


    useEffect(() => {
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!");
                    break;
                default:
                    toast("something went wrong");
            }
        }
    }, [error]);


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

    const handleLogInForm = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(userInfo.email, userInfo.password)


    }
    return (

        <div className="login-container ">
            <div className="login-title">Log In</div>
            <form onSubmit={handleLogInForm} className="login-form">
                <input onChange={handleEmail} type="text" placeholder="Your Email" />
                {errors?.emailError && <p className="error-message">{errors.emailError}</p>}

                <input onBlur={handlePassword} type="password" placeholder="password" />
                {errors?.passwordError && <p className="error-message">{errors.passwordError}</p>}



                <button type='submit'>Log In</button>
                <span className='note text-danger'>Already Have An Account? <Link to='/signup' className='btn text-white'>Sign Up</Link></span>
            </form>
            <ToastContainer theme="dark" />
            <button>Google Log In</button>
        </div>

    );
};

export default LogIn;