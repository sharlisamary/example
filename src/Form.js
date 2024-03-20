import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Form() {
    const [formData, setFormData] = useState({ Name: "", Age: "", Gender: "", Email: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
        if (!formData.Name) {
            newErrors.Name = "Name is required";
            isValid = false;
        }
        if (!formData.Age) {
            newErrors.Age = "Age is required";
            isValid = false;
        }
        if (!formData.Gender) {
            newErrors.Gender = "Gender is required";
            isValid = false;
        }
        if (!formData.Email) {
            newErrors.Email = "Email is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };
    const callbackApi = () => {
        axios.post('http://localhost:1234/registerUser', {
            name: formData.Name,
            age: formData.Age,
            email: formData.Email,
            gender: formData.Gender

        })
            .then((response) => {
                navigate('/listout')
                console.log(response);

            })
            .catch((error) => {
                console.log(error, "========================");
            })


    }
    const handleSubmit = (event) => {
        event.preventDefault()

        if (validateForm()) {
            console.log("Form data:", formData);
            callbackApi()
            alert("Form is valid Successfully")
            setSubmitted(true);
        } else {
            console.log(errors);
            alert("Form is not valid")
        }

    };

    return (

        <div className="container-fluid m-3 bg-lite ">
            {submitted ? (
                <div className="success-message">Login successful!</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="column">
                        <div className="mt-5">
                            <h2>GYM Membership Form</h2>
                            <div className='row mt-5 '>
                                <div className='column m-3'>
                                    <label className="d-flex  align-items-center">Name:</label>
                                    <input type='text' name="Name" value={formData.Name} maxLength={15} onChange={handleChange}></input>
                                    {errors.Name && <div className="error" style={{ color: "red" }}>{errors.Name}</div>}
                                </div>

                                <div className='column m-3'>
                                    <label className="d-flex  align-items-center ">Age:</label>
                                    <input type="number" name="Age" value={formData.Age} maxLength={2} onChange={handleChange}></input>
                                    {errors.Age && <div className="error" style={{ color: "red" }}>{errors.Age}</div>}
                                </div>

                                <div className='column m-3'>
                                    <label className="d-flex  align-items-center ">Gender:</label>
                                    <input type="text" name="Gender" value={formData.Gender} onChange={handleChange}></input>
                                    {errors.Gender && <div className="error" style={{ color: "red" }}>{errors.Gender}</div>}
                                </div>
                                <div className='column m-3'>
                                    <label className="d-flex  align-items-center ">Email:</label>
                                    <input type="text" name="Email" value={formData.Email} onChange={handleChange}></input>
                                    {errors.Email && <div className="error " style={{ color: "red" }}>{errors.Email}</div>}
                                </div>

                            </div>
                            <div className='w-30 h-30 d-flex' >
                                <button className='btn btn-primary' type="onsubmit" > SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </div >
    );
}
export default Form;