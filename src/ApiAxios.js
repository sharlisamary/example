import axios from "axios";
import { useEffect, useState } from "react"

function App() {
    const [users, setUsers] = useState([]);
    const [searchUserId, setSearchUserId] = useState("")
    // const fetchData = () => {
    //   return axios
    //     .get("https://jsonplaceholder.typicode.com/posts")
    //     .then((responce) => setUsers(responce.data))

    // }

    useEffect(() => {
        console.log(searchUserId.length);

        axios(`https://jsonplaceholder.typicode.com/posts${searchUserId ? `?userId=${searchUserId}` : ""} `)
            .then((res) => {
                console.log(res);
                setUsers(res.data)
            })


        // fetchData()
    }, [searchUserId]);
    const HandleChange = (e) => {
        e.preventDefault()
        setSearchUserId(e.target.value)
    }

    // console.log(users);
    return (
        <>
            <form>
                <input className="userId d-flex align-items-center justify-content-center " type="number" onChange={(e) => HandleChange(e)}></input>
            </form>

            {users.map((data) => {
                return (
                    <div className="row row-cols-4 row-cols-md-3 g-4">
                        <div className="col-3">
                            <div className=" card col-sm-6 container-fluid d-flex flex-wrap h-100 " style={{ width: "80%", display: "flex", flexDirection: "row" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{data.id} . {data.title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">userId:{data.userId}</h6>
                                    <p className="card-text">{data.body}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })}
        </>
    );
}

export default App;

























