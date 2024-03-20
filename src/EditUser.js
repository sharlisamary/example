import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom"
import axios from "axios";
const EditUser = () => {
    const [formData, setFormData] = useState({ name: "", age: "", gender: "", email: "" });
    const [errors, setErrors] = useState({});
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location, "location")

    useEffect(() => {
        if (location.state) {
            setFormData(location.state)
        }
    }, [location])
    console.log(formData, "==========================")
    const handelInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = "Name is required";
            isValid = false;
        }
        if (!formData.age) {
            newErrors.age = "Age is required";
            isValid = false;
        }
        if (!formData.gender) {
            newErrors.gender = "Gender is required";
            isValid = false;
        }
        if (!formData.email) {
            newErrors.email = "Email is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const updateUser = (e) => {
        e.preventDefault()
        const data = { formData, params }
        console.log(data, "=============================")
        if (validateForm()) {
            alert("Form is valid Successfully")
        } else {
            console.log(errors);
            alert("Form is not valid")
        }
        axios.put('http://localhost:1234/updateUser', formData)
            .then((res) => {
                console.log(res, "kkkkkkkkkkkkkkkkkkkkkkk")
            })
    }

    return (
        <div className="user-form">
            <div></div>
            <div className="heading">
                <h2>EDITING PAGE</h2>
            </div>
            <form onSubmit={updateUser}>
                <div className="column">
                    <div className="mt-5">
                        <div className='row mt-5 '>
                            <div className='column m-3'>
                                <label className="d-flex  align-items-center">Name:</label>
                                <input type='text' name="name" value={formData.name} maxLength={15} onChange={handelInput}></input>
                                {errors.name && <div className="error" style={{ color: "red" }}>{errors.name}</div>}
                            </div>

                            <div className='column m-3'>
                                <label className="d-flex  align-items-center ">Age:</label>
                                <input type="number" name="age" value={formData.age} maxLength={2} onChange={handelInput}></input>
                                {errors.age && <div className="error" style={{ color: "red" }}>{errors.age}</div>}
                            </div>

                            <div className='column m-3'>
                                <label className="d-flex  align-items-center ">Gender:</label>
                                <input type="text" name="gender" value={formData.gender} onChange={handelInput}></input>
                                {errors.gender && <div className="error" style={{ color: "red" }}>{errors.gender}</div>}
                            </div>
                            <div className='column m-3'>
                                <label className="d-flex  align-items-center ">Email:</label>
                                <input type="text" name="email" value={formData.email} onChange={handelInput}></input>
                                {errors.email && <div className="error " style={{ color: "red" }}>{errors.email}</div>}
                            </div>

                        </div>
                        <div className='w-30 h-30 d-flex' >
                            <button className='btn btn-primary' type="onsubmit" onClick={() => navigate(-1)}  > updateUser</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};
export default EditUser;