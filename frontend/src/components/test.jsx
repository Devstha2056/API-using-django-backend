import "../styles/test.css"
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

export default function Test() {
    const [Name, setName] = useState("");
    const [Gender, setGender] = useState("");
    const [Address, setAddress] = useState("");
    const [Contact, setContact] = useState("");

    const [Pregnancies, setPregnancies] = useState("");
    const [Glucose, setGlucose] = useState("");
    const [BloodPressure, setBloodPressure] = useState("");
    const [SkinThickness, setSkinThickness] = useState("");
    const [Insulin, setInsulin] = useState("");
    const [BMI, setBMI] = useState("");
    const [DiabetesPedigreeFunction, setDiabetesPedigreeFunction] = useState("");
    const [Age, setAge] = useState("");


    const [testStatus, setTestStatus] = useState("");
    const navigate = useNavigate();




    const test = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3000/test", {
            Name: Name,
            Address: Address,
            Gender: Gender,
            Contact: Contact,

            Pregnancies: Pregnancies,
            Glucose: Glucose,
            BloodPressure: BloodPressure,
            SkinThickness: SkinThickness,
            Insulin: Insulin,
            BMI: BMI,
            DiabetesPedigreeFunction: DiabetesPedigreeFunction,
            Age: Age,
        }).then((response) => {
            if (response.data.message) {
                setTestStatus("POsitive");
            } else {
                setTestStatus("Negative");
            }
        })
    }

    return <>

        <div className="containerTest">

            <form>

                <div className="detailsTestInput">
                    <div className="dataTestInput">
                        <label className="labelTest" >Patient Name:</label>
                        <input type="text" className="inputTest"
                            name="Name"
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>

                    <div className="dataTestInput">
                        <label className="labelTest" >Address:</label>
                        <input type="text" className="inputTest"
                            name="Address"
                            onChange={(e) => { setAddress(e.target.value) }}
                        />
                    </div>

                    <div className="dataTestInput">
                        <fieldset>
                            <span>Gender:</span>

                            <label htmlFor="male" className="labelTest">
                                <input type="radio" className="inputTest" name="Gender" value="male"
                                    onChange={(e) => { setGender(e.target.value) }}
                                />
                                M
                            </label>

                            <label htmlFor="female" className="labelTest">
                                <input type="radio" className="inputTest" name="Gender" value="female"
                                    onChange={(e) => { setGender(e.target.value) }}
                                />
                                F
                            </label>

                            <label htmlFor="other" className="labelTest">
                                <input
                                    type="radio" className="inputTest" name="Gender" value="other"
                                    onChange={(e) => { setGender(e.target.value) }}
                                />
                                Other
                            </label>
                        </fieldset>
                    </div>

                    <div className="dataTestInput">
                        <label className="labelTest" >Contact Number:</label>
                        <input type="tel" className="inputTest"
                            name="Contact"
                            onChange={(e) => { setContact(e.target.value) }}
                        />
                    </div>

                </div>


                <h1 className="h1Test">Please enter the following informations:</h1>
                <div className="MainTestInput">
                    <div className="dataTestInput">
                        <label className="labelTest" >Pregnancies</label>
                        <input type="number" className="inputTest"
                            name="Pregnancies"
                            onChange={(e) => { setPregnancies(e.target.value) }}
                        />
                    </div>

                    <div className="dataTestInput">
                        <label className="labelTest" >Glucose</label>
                        <input type="number" className="inputTest"
                            name="Glucose"
                            onChange={(e) => { setGlucose(e.target.value) }}
                        />
                    </div>

                    <div className="dataTestInput">
                        <label className="labelTest" >BloodPressure</label>
                        <input type="number" className="inputTest"
                            name="BloodPressure"
                            onChange={(e) => { setBloodPressure(e.target.value) }}
                        />
                    </div>

                    <div className="dataTestInput">
                        <label className="labelTest" >SkinThickness</label>
                        <input type="number" className="inputTest"
                            name="SkinThickness"
                            onChange={(e) => { setSkinThickness(e.target.value) }}
                        />
                    </div>

                    <div className="dataTestInput">
                        <label className="labelTest" >Insulin</label>
                        <input type="number" className="inputTest"
                            name="Insulin"
                            onChange={(e) => { setInsulin(e.target.value) }}
                        />
                    </div>

                    <div className="dataTestInput">
                        <label className="labelTest" >BMI</label>
                        <input type="number" className="inputTest"
                            name="BMI"
                            onChange={(e) => { setBMI(e.target.value) }}
                        />
                    </div>

                    <div className="dataTestInput">
                        <label className="labelTest" >DiabetesPedigreeFunction</label>
                        <input type="number" className="inputTest"
                            name="DiabetesPedigreeFunction"
                            onChange={(e) => { setDiabetesPedigreeFunction(e.target.value) }}
                        />
                    </div>

                    <div className="dataTestInput">
                        <label className="labelTest" >Age</label>
                        <input type="number" className="inputTest"
                            name="Age"
                            onChange={(e) => { setAge(e.target.value) }}
                        />
                    </div>

                </div>
                <div id="btnTest">
                    <button className="btn1Test" > <a href="/login2">Test</a></button>
                    <button className=" btn1Test " > <a href="/">Logout</a></button>
                </div>

            </form>
        </div>

    </>
};

