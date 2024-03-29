import { React } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Listout from './Listout';
import Form from './Form';
import EditUser from './EditUser';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Form' element={< Form />} />
            <Route path='/listout' element={<Listout />} />
            <Route path='/edituser' element={<EditUser />} />
        </Routes>
    </Router>
);
function Home() {
    return (
        < div >
            <h1 style={{ textAlign: "center" }}> <br></br>FORM <br></br></h1>
            <Link to={'/form'} style={{ textAlign: "center", fontWeight: "bold", fontSize: "larger" }}>Gym Membership Form</Link>
        </div >
    )
}

reportWebVitals();