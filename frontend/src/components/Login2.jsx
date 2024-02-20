import "../styles/sign.css"
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "./Navbar";

// import Test from "./testReport";

export default function Login2() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const login = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3000/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                navigate('/test');
                // setLoginStatus(response.data[0].email);

            }
        })
    }

    return <>
        <Navbar />
        <div className="containerLogin">
            <div className="formLogin">

                <h1 id="title">SIGN IN</h1>
                <form >
                    <div className="mainForm">
                        <div className="inputData">

                            <input

                                type="text" className="input"
                                name="username"
                                onChange={(e) => { setUsername(e.target.value) }}
                                required
                            />
                            <label className="label" >Username</label>
                        </div>
                    </div>


                    <div className="mainForm">
                        <div className="inputData">

                            <input

                                type={showPassword ? "text" : "password"} className="input"
                                name="password"
                                onChange={(e) => { setPassword(e.target.value) }}
                                required />
                            <label className="label">Password</label>
                            <div className="eye-icon" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>

                    </div>
                    <h1 style={{ color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px' }}>{loginStatus}</h1>

                    <p> Create a new account <a href="/register2" className="link">Sign up</a></p>

                    <div className="button_group">
                        <button id="loginBtn" type="submit" onClick={login} >Login</button>
                    </div>
                </form>
            </div>
        </div>

    </>
};

