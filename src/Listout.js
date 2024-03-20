import React, { useState, useEffect, } from "react";
import { useNavigate, } from "react-router-dom";
import axios from "axios";
function Listout() {
    const [users, setUsers] = useState({ name: "", age: "", gender: "", email: "" })
    const navigate = useNavigate()
    // const params = useParams()
    useEffect(() => {
        GetApi()

    }, []);

    const GetApi = () => {
        axios.get('http://localhost:1234/getUser')
            .then((res) => {
                setUsers(res.data.data)
            })
    }

    const handleDelete = (userid) => {
        console.log(userid, "=====================================")
        axios.delete('http://localhost:1234/deleteUser', { params: { id: userid } })
            .then((res) => {
                setUsers(res.data.data)

            })
    };


    const selectUser = (user) => {
        console.log(user, "user");
        // setUsers(item)
        navigate('/edituser', { state: user })
    }
    return (
        <div Form className="container-fluid m-3 bg-lite ">
            <div className="column">
                <div className="col-12 mt-5" >
                    <table className='table'>

                        <tr className='table-active'>
                            <th > Id     </th>
                            <th > Name   </th>
                            <th > Age    </th>
                            <th > Gender </th>
                            <th > Email  </th>
                        </tr>

                        {users.length > 0 && users.map((item, id) => {
                            // console.log(users);
                            return (
                                <tbody >
                                    <tr key={id}>
                                        <td >  {item._id}   </td>
                                        <td >  {item.name}   </td>
                                        <td >  {item.age}    </td>
                                        <td >  {item.gender} </td>
                                        <td >   {item.email}  </td>
                                        <tr>
                                            <td>
                                                <button className="btn btn-primary" onClick={() => { selectUser(item) }} > update</button>
                                                <button className="btn btn-danger" onClick={() => { handleDelete(item._id) }}>Delete</button>

                                            </td>
                                        </tr>

                                    </tr>
                                </tbody>
                            )
                        })}


                    </table>
                </div>
            </div>
        </div>
    )

}
export default Listout;