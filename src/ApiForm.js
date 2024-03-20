import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function ApiForm() {
    let user = {};
    const navigate = useNavigate()
    const [inputFields, setInputFields] = useState({ name: "", age: null, gender: "", email: "" });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false)
    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.name.length < 3) {
            errors.name = "Name is too short";
        }
        if (inputValues === null) {
            errors.age = "Age is not valid ";
        }
        if (inputValues.gender === null) {
            errors.gender = "enter the gender";
        }
        if (inputValues.email.length < 15) {
            errors.email = "Email is too short";
        }


        return errors;
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateValues(inputFields));
        setSubmitting(true);
        // function handleApi() {
        //     axios.post('http://localhost:1234/registerUser', {
        //         name: "hjbdbjh",
        //         age: "12",
        //         email: "msnxnjh",
        //         gender: "male"
        //     })
        //         .then((response) => {
        //             navigate('/listout')
        //             console.log(response);

        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         })
        // }
        // handleApi()
    };
    const finishSubmit = () => {
        console.log(inputFields);
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors, submitting]);
    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    }

    function handleAgeChange(e) {
        const { name } = e.target
        if (e.target.value.length > e.target.maxLength) {
            e.target.value = e.target.value.slice(0, e.target.maxLength)  //type of number ah max length  apply panrathu
            user[name] = e.target.value
        }

    }


    return (

        <div className="container-fluid m-3 bg-lite ">
            {Object.keys(errors).length === 0 && submitting ? (
                <span className="success">Successfully submitted</span>
            ) : null}
            <form onSubmit={handleSubmit}>
                <div className="column">
                    <div className="mt-5">
                        <h2>GYM Membership Form</h2>
                        <div className='row mt-5 '>
                            <div className='column m-3'>
                                <label className="d-flex  align-items-center">Name:</label>
                                <input type='text' name="name" value={inputFields.name} maxLength={15} onChange={handleChange}></input>
                                {errors.name ? (
                                    <p className="error">Name atleast 5 characters</p>
                                ) : null}
                            </div>

                            <div className='column m-3'>
                                <label className="d-flex  align-items-center ">Age:</label>
                                <input type="number" name="age" value={inputFields.age} maxLength={2} onChange={handleAgeChange}></input>
                                {errors.age ?
                                    <p className="error">Age is not valid</p> : null}
                            </div>

                            <div className='column m-3'>
                                <label className="d-flex  align-items-center ">Gender:</label>
                                <input type="text" name="gender " value={inputFields.gender} onChange={handleChange}></input>
                                {errors.gender ? (
                                    <p className="error">Gender is not filled</p>
                                ) : null}
                            </div>
                            <div className='column m-3'>
                                <label className="d-flex  align-items-center ">Email:</label>
                                <input type="text" name="Email" value={inputFields.email} onChange={handleChange}></input>
                                {errors.email ? (
                                    <p className="error">Email should be at least 15 characters long</p>
                                ) : null}
                            </div>

                        </div>
                        <div className='w-30 h-30 d-flex' >
                            <button className='btn btn-primary' type="onsubmit" > SUBMIT</button>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    );
}
export default ApiForm;