import React, { useEffect, useState, useContext } from 'react';
import "../css/page css/LoginPage.css";
import "../css/responsiveness/LoginPage.css"
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../App';

export default function LoginPage() {
    const navigate = useNavigate();
    const { setLogin, setUserId } = useContext(MyContext);
    const [loginForm, setLoginForm] = useState(true);
    const [signupForm, setSignupForm] = useState(false);
    const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
    const [loginData, setLoginData] = useState({ loginEmail: "", loginPassword: "" });

    const handleSignupChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://clustershield-backend.onrender.com/create-user", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(signupData)
        });
        const json = await response.json();
        if (json.success) {
            alert("Account Created Successfully");
            localStorage.setItem('token', json.token);
            localStorage.setItem('userId', json.data._id); // Store token
            setLogin(true); // Update login state
            navigate("/"); // Redirect to homepage
        }
    };

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            email: loginData.loginEmail,
            password: loginData.loginPassword
        };
        const response = await fetch("https://clustershield-backend.onrender.com/login-user", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const json = await response.json();
        if (json.success) {
            setUserId(json.data._id)
            console.log(json.data._id)
            localStorage.setItem('token', json.token); // Store token
            localStorage.setItem('userId', json.data._id); // Store token
            setLogin(true); // Update login state
            navigate("/"); // Redirect to homepage
        } else {
            alert(json.reason); // Show error message
        }
    };

    const showSignupForm = () => {
        setSignupForm(true);
        setLoginForm(false);
    };

    const showLoginForm = () => {
        setLoginForm(true);
        setSignupForm(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='loginPage'>
            <div className="form-box">
                {loginForm && (
                    <form onSubmit={handleLoginSubmit} className="login-form">
                        <h3>Log In</h3>
                        <div className="input-box">
                            <p>Email*</p>
                            <input
                                type="email"
                                className="input-field"
                                placeholder='Work Email'
                                name='loginEmail'
                                value={loginData.loginEmail}
                                onChange={handleLoginChange}
                            />
                        </div>
                        <div className="input-box">
                            <p>Password*</p>
                            <input
                                type="password"
                                className="input-field"
                                placeholder='Your Password'
                                name='loginPassword'
                                value={loginData.loginPassword}
                                onChange={handleLoginChange}
                            />
                        </div>
                        <input type="submit" value="Login" className='btn-a' />
                        <p>Are you a new user? <button onClick={showSignupForm}>Create Account</button></p>
                    </form>
                )}

                {signupForm && (
                    <form className="signup-form login-form" onSubmit={handleSignupSubmit}>
                        <h3>New Registration</h3>
                        <div className="input-box">
                            <p>Name*</p>
                            <input
                                type="text"
                                className="input-field"
                                placeholder='Name'
                                name='name'
                                value={signupData.name}
                                onChange={handleSignupChange}
                            />
                        </div>
                        <div className="input-box">
                            <p>Email*</p>
                            <input
                                type="email"
                                className="input-field"
                                placeholder='Work Email'
                                name='email'
                                value={signupData.email}
                                onChange={handleSignupChange}
                            />
                        </div>
                        <div className="input-box">
                            <p>Password*</p>
                            <input
                                type="password"
                                className="input-field"
                                placeholder='Your Password'
                                name='password'
                                value={signupData.password}
                                onChange={handleSignupChange}
                            />
                        </div>
                        <input type="submit" value="Register" className='btn-a' />
                        <p>Already have an account? <button onClick={showLoginForm}>Login</button></p>
                    </form>
                )}
            </div>
        </div>
    );
}
