import React, { useState } from "react";
import "../styles/sign.css"
import Axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "./Navbar";

export default function Register2() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const register = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3000/register", {
            email: email,
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setRegisterStatus("Please fill in all the required fields!");
            } else {
                setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
            }
        })
    }

    return <>
        <Navbar />
        <div className="containerLogin">
            <div className="formRegister">

                <h1 id="title">Sign Up</h1>
                <form >

                    <div className="mainForm">
                        <div className="inputData">
                            <input

                                type="e-mail" className="input" name="email"
                                onChange={(e) => { setEmail(e.target.value) }}
                                required

                            />
                            <label
                                className="label" >E-mail</label>
                        </div>

                    </div>
                    <div className="mainForm">
                        <div className="inputData">
                            <input
                                type="text" className="input" name="username"
                                onChange={(e) => { setUsername(e.target.value) }}
                                required
                            />
                            <label className="label" >Username</label>
                        </div>
                    </div>



                    <div className="mainForm">
                        <div className="inputData">
                            <input

                                type={showPassword ? "text" : "password"} className="input" name="password"
                                onChange={(e) => { setPassword(e.target.value) }}
                                required

                            />
                            <label

                                className="label">Password </label>
                            <div className="eye-icon" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>

                    </div>
                    <h1 style={{ fontSize: '15px', textAlign: 'center', marginTop: '20px' }}>{registerStatus}</h1>

                    <p> Already have an account? <a href="/login2" className="link" >Sign in</a></p>
                 
                    <div className="button_group">
                        <button id="registerBtn" type="submit" onClick={register} >Register</button>

                    </div>
                </form>
            </div>
        </div>
    </>

}