import React, { useEffect, useRef, useState } from 'react'
import backAction from '../Actions/backAction';

const Authportal = ({ setOpenAuthPortal, setResetHandler }) => {
    const [showSignup, setShowSignup] = useState(false);
    const [showOtpSection, setShowOtpSection] = useState(false);
    const [clientError, setClientError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
        otp: ''
    });

    const [timer, setTimer] = useState(25);
    const [canResend, setCanResend] = useState(false);
    useEffect(() => {
        setResetHandler(() => resetFunction);
    }, []);
    useEffect(() => {
        if (timer === 0) {
            setCanResend(true);
            return;
        }

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    const resetFunction = () => {
        setFormData({
            name: '', email: '', password1: '', password2: '', otp: ''
        });
        setClientError(null);
        setSuccessMessage(null);

    }
    const validateForm = (formData) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setClientError("Please fill a valid email id");
            return false;
        }
        else if (formData.password1.length < 8) {
            setClientError("Password should be of atleast 8 characters");
            return false;
        }
        else if (!/[a-z]/.test(formData.password1)) {
            setClientError("Password must include at least one lowercase letter.");
            return false;
        }
        else if (!/[A-Z]/.test(formData.password1)) {
            setClientError("Password must include at least one uppercase letter.");
            return false;
        }
        else if (!/\d/.test(formData.password1)) {
            setClientError("Password must include at least one number.");
            return false;
        }
        else if (!/[@$!%*?&#^+=]/.test(formData.password1)) {
            setClientError("Password must include at least one special character.");
            return false;
        }
        else if (formData.password2 && formData.password1 != formData.password2) {
            setClientError("Password is not same as confirm password");
            return false;
        }
        else return true;
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const registerSubmit = (isResend) => {
        if (validateForm(formData)) {
            setClientError(null);
            backAction.register(formData, isResend)
                .then(({ data }) => {
                    setClientError(null);
                    setShowSignup(false);
                    setShowOtpSection(true);
                })
                .catch(({ response }) => {
                    console.log('error', response.data);
                    setClientError(response.data.message);
                })
        }
    };
    const otpSubmit = (e) => {
        e.preventDefault();
        backAction.verifyOtp(formData)
            .then(res => {
                if (res.status == 200) {
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    setUser(res.data.user)
                    setToken(res.data.token);
                    setSuccessMessage(res.data.message)
                    setShowSignup(false);
                    setShowOtpSection(false);
                }
                else {
                    setClientError(res.data.message);
                }
            })
            .catch(({ response }) => {
                console.log('Server side error [otpSubmit]', e);
                setClientError(response.data.message)
            })
    };
    const loginSubmit = (e) => {
        e.preventDefault();
        if (validateForm(formData)) {
            setClientError(null);
            backAction.login(formData)
                .then(res => {
                    if (res.status == 200) {
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('user', JSON.stringify(res.data.user));
                        setUser(res.data.user)
                        setToken(res.data.token);
                        setSuccessMessage(res.data.message)
                        setShowSignup(false);
                        setShowOtpSection(false);
                    }
                    else {
                        setClientError(res.data.message);
                    }
                })
                .catch(({ response }) => {
                    console.log('Server side error [loginSubmit]', response);
                    setClientError(response.data.message);
                })
        }
    };
    const handleResend = (e) => {
        e.preventDefault();
        if (canResend) {
            setTimer(25);
            setCanResend(false);
            registerSubmit(true);
        }
    };
    const logoutButton = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        resetFunction();
        setToken(null);
        setOpenAuthPortal(false);
        // setShowSignup(false);

    }
    const successFunc = () => successMessage && <p className='message success-message'>{successMessage}</p>
    const errorFunc = () => clientError && <p className='message err-message'>* {clientError}</p>
    return (
        <>
            {token &&
                <div className="auth-portal logged-in-portal"
                    onClick={(e) => e.stopPropagation()}>
                    <h1 style={{ marginBottom: 0 }}>Hi, {user && user.name.split(' ')[0]} !</h1>
                    <p>{user && user.email}</p>
                    <button onClick={logoutButton} className="login-button">
                        Log out
                    </button>
                    {successFunc()}
                    {errorFunc()}
                    <div>
                    </div>

                </div>
            }
            {!token && showOtpSection &&
                <div className="auth-portal auth-otp-portal"
                    onClick={(e) => e.stopPropagation()}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '5%' }}>
                        <div onClick={() => {
                            setShowSignup(true);
                            setShowOtpSection(false);
                        }}
                            style={{ cursor: 'pointer' }}>
                            <img src='/images/backButton.png' />
                        </div>
                        <p className="auth-heading">OTP Verification</p>
                    </div>
                    <p>Check your email for an otp to verify your email. If it doesn't appear within a few minutes, check your spam folder.</p>
                    <form onSubmit={otpSubmit} >
                        <div className="form-element">
                            <label>Please enter the verification code sent to the {formData.email}</label>
                            <input
                                type="text"
                                name="otp"
                                className="otp-input element-input w-full bg-transparent text-white border border-gray-500 rounded p-2 focus:outline-none focus:border-white placeholder-gray-300"
                                value={formData.otp}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button className="login-button" type="submit" >
                                Submit
                            </button>
                            <div style={{ fontSize: '14px', color: '#333' }}>
                                {canResend ? (
                                    <button onClick={handleResend}
                                        className="login-button"
                                        style={{ width: '100%' }}>
                                        Resend OTP
                                    </button>
                                ) : (
                                    <span style={{ color: 'whitesmoke' }}>Resend OTP in {timer}s</span>
                                )}
                            </div>

                        </div>
                    </form>
                    {successFunc()}
                    {errorFunc()}
                </div>
            }
            {!token && showSignup && !showOtpSection &&
                <div className="auth-portal auth-signup-portal"
                    onClick={(e) => e.stopPropagation()}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '5%' }}>
                        <div onClick={() => {
                            setShowSignup(false);
                            resetFunction();
                        }}
                            style={{ cursor: 'pointer' }}>
                            <img src='/images/backButton.png' />
                        </div>
                        <p className="auth-heading">Signup with email</p>
                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        registerSubmit();
                    }} >
                        <div className="form-element">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                className="element-input w-full bg-transparent text-white border border-gray-500 rounded p-2 focus:outline-none focus:border-white placeholder-gray-300"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e.g. Akash Gupta"
                                required
                            />
                        </div>
                        <div className="form-element">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                className="element-input w-full bg-transparent text-white border border-gray-500 rounded p-2 focus:outline-none focus:border-white placeholder-gray-300"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="e.g. abc@xyz.com"
                                required
                            />
                        </div>
                        <div className="form-element">
                            <label >Password</label>
                            <input
                                type="password"
                                name="password1"
                                className="element-input"
                                value={formData.password1}
                                onChange={handleChange}
                                placeholder="atleast 8 characters"
                                required
                            />
                        </div>
                        <div className="form-element">
                            <label >Confirm Password</label>
                            <input
                                type="password"
                                name="password2"
                                className="element-input"
                                value={formData.password2}
                                onChange={handleChange}
                                placeholder="atleast 8 characters"
                                required
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button className="login-button"
                                type='button'
                                onClick={resetFunction} >
                                Reset
                            </button>
                            <button className="login-button" type="submit" >
                                Submit
                            </button>

                        </div>

                    </form>
                    {successFunc()}
                    {errorFunc()}
                </div>
            }
            {!token && !showSignup && !showOtpSection &&
                <div className="auth-portal"
                    onClick={(e) => e.stopPropagation()}>
                    <p className="auth-heading">Login with email</p>
                    <form onSubmit={loginSubmit} >
                        <div className="form-element">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                className="element-input w-full bg-transparent text-white border border-gray-500 rounded p-2 focus:outline-none focus:border-white placeholder-gray-300"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="e.g. abc@xyz.com"
                                required
                            />
                        </div>
                        <div className="form-element">
                            <label >Password</label>
                            <input
                                type="password"
                                name="password1"
                                className="element-input"
                                value={formData.password1}
                                onChange={handleChange}
                                placeholder="atleast 8 characters"
                                required
                            />
                        </div>
                        <button className="login-button" type="submit" >
                            Login
                        </button>
                    </form>
                    <p>Don't have an account ?</p>
                    <button onClick={() => setShowSignup(true)} className="login-button">
                        Sign up
                    </button>
                    {successFunc()}
                    {errorFunc()}
                </div>
            }
        </>
    );
};

export default Authportal;


