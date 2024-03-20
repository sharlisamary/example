import React from "react";
import { useState } from 'react'
const Weightage = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [currentWeight, setCurrentWeight] = useState('');
    const [desiredWeight, setDesiredWeight] = useState('');
    const [height, setHeight] = useState('');
    const [issubmit, setIssubmit] = useState(false)
    const [form, setForm] = useState([]);
    const [selectedOption, setSelectedOption] = useState(false);
    const [editIndex, setEditIndex] = useState(false);
    const [editName, setEditName] = useState('');
    const [editAddress, setEditAddress] = useState('');
    const [editCurrentWeight, setEditCurrentWeight] = useState('');
    const [editDesiredWeight, setEditDesiredWeight] = useState('');
    const [editHeight, setEditHeight] = useState('')
    let weightArray = []


    const handleSubmit = () => {
        setIssubmit(true)
        if (currentWeight > 100) {
            alert(" current weight Not Greater than 100")
        }

        else if (currentWeight < 100) {
            if (name === '') {
                alert("member name is not filled")

            }
            if (height > 600) {
                alert("Height enterd in centemeter")

            }
            if (desiredWeight > 100) {
                alert("desired weight Not Greater than 100")
            }
            if (address == null) {
                alert("please entered valid address")
            }
            if ((name !== '') && (address !== '') && (currentWeight !== '') && (desiredWeight !== '') && (height !== '')) {
                weightArray.push(parseInt(currentWeight))
                console.log(weightArray)
                const user = { name, address, currentWeight, desiredWeight, height };
                setForm([...form, user]);
                setName('');
                setAddress('');
                setCurrentWeight('');
                setDesiredWeight('');
                setHeight('')
            }

        }
    };

    const handleOption = (index) => {
        const updatedForm = [...form]
        updatedForm[index].selectedOption = !updatedForm[index].selectedOption;
        setForm(updatedForm)
        setSelectedOption(!selectedOption);
    };

    const handleDelete = (index) => {
        const updatedForm = [...form];
        updatedForm.splice(index, 1);
        setForm(updatedForm);

    };

    const handleEdit = () => {
        if (editCurrentWeight > 100) {
            alert('Weightage count not greater than 100');
        } else if (editCurrentWeight < 100) {
            if ((editName !== "") && (editAddress !== "") && (editCurrentWeight !== "") && (editDesiredWeight !== "") && (editHeight !== "")) {
                const updatedForm = [...form];
                updatedForm[editIndex] = {
                    name: editName,
                    address: editAddress,
                    currentWeight: editCurrentWeight,
                    desiredWeight: editDesiredWeight,
                    height: editHeight

                };
                setForm(updatedForm);
                setEditIndex(false);
                setEditName('');
                setEditAddress('');
                setEditCurrentWeight('');
                setEditDesiredWeight('');
                setEditHeight('');
            }
        }
    };


    const handleEditProcess = (index) => {
        if (index !== false) {
            setEditIndex(index);
            const editedItem = form[index];
            setEditName(editedItem.name);
            setEditAddress(editedItem.email);
            setEditCurrentWeight(editedItem.currentWeight);
            setEditDesiredWeight(editedItem.desiredWeight);
            setEditHeight(editedItem.height);
            setSelectedOption(!selectedOption);

        }
    }

    return (
        <>


            <div className="container-fluid m-3 bg-lite ">
                <div className="column">
                    <div className="mt-5">
                        <h2>GYM Membership Form</h2>
                        <div className='row mt-5 '>
                            <div className='column m-3'>
                                <label className="d-flex  align-items-center">Name:</label>
                                <input type='text' value={editIndex !== false ? editName : name} onChange={(e) => (editIndex !== false ? setEditName(e.target.value) : setName(e.target.value))}></input>
                            </div>
                            <div className='column m-3'>
                                <label className="d-flex  align-items-center ">CurrentWeight (kg)*:</label>
                                <input value={editIndex !== false ? editCurrentWeight : currentWeight} type='number' onChange={(e) => (editIndex !== false ? setEditCurrentWeight(e.target.value) : setCurrentWeight(e.target.value))}></input>
                            </div>
                            <div className='column m-3'>
                                <label className="d-flex align-items-center ">DesiredWeight (kg)*:</label>
                                <input value={editIndex !== false ? editDesiredWeight : desiredWeight} type='number' onChange={(e) => (editIndex !== false ? setEditDesiredWeight(e.target.value) : setDesiredWeight(e.target.value))}></input>
                            </div>
                            <div className='column m-3'>
                                <label className="d-flex  align-items-center ">Height in(cm)*:</label>
                                <input value={editIndex !== false ? editHeight : height} type='number' onChange={(e) => (editIndex !== false ? setEditHeight(e.target.value) : setHeight(e.target.value))}></input>
                            </div>
                            <div className='column m-3'>
                                <label className="d-flex align-items-center ">Address:</label>
                                <input style={{ resize: "none" }} type='text' value={editIndex !== false ? editAddress : address} onChange={(e) => (editIndex !== false ? setEditAddress(e.target.value) : setAddress(e.target.value))}></input>
                            </div>
                        </div>
                        <div className='w-30 h-30 d-flex' >

                            <button className='btn btn-primary' onClick={editIndex !== false ? handleEdit : handleSubmit} type='submit' >{editIndex !== false ? 'UPDATE' : 'SUBMIT'}</button>

                        </div>


                    </div>
                    <div className="col-12 mt-5" >
                        <table className='table'>

                            <tr className='table-active'>
                                <th >Name</th>
                                <th >CurrentWeight</th>
                                <th >DesiredWeight</th>
                                <th> Height </th>
                                <th >Address</th>

                            </tr>

                            {issubmit && form.map((item, index) => {

                                return (
                                    <tbody >
                                        <tr >
                                            <td >{item.name} </td>
                                            <td >{item.currentWeight}</td>
                                            <td >{item.desiredWeight}</td>
                                            <td >{item.height}</td>
                                            <td >{item.address}</td>
                                            <tr>
                                                <div onClick={() => { handleOption(index); }}>
                                                    <img alt='three dots' src='https://w7.pngwing.com/pngs/948/504/png-transparent-computer-icons-material-design-hamburger-button-menu-menu-text-rectangle-computer-wallpaper-thumbnail.png' height='20' width='20'></img></div>
                                                {item.selectedOption &&
                                                    <div className='menu-options'>
                                                        <div className='option' onClick={() => handleEditProcess(index)}>Edit</div>
                                                        <div className='option' onClick={() => handleDelete(index)}>Delete</div>
                                                    </div>
                                                }

                                            </tr>
                                        </tr>
                                    </tbody>
                                )
                            })}


                        </table>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Weightage;