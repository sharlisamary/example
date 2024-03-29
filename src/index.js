import { React } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Registerform from './Registerform';
// import Loginform from './Loginform';
// import Homescreen from './Homescreen';
import { Login } from './modules';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      {/* <Route path='/registerform' element={< Registerform />} />
      <Route path='/loginform' element={<Loginform />} />
      <Route path='/homescreen' element={<Homescreen />} /> */}
    </Routes>
  </Router>
);
// function Home() {
//   return (
//     < div >
//       <h1 style={{ textAlign: "center" }}> <br></br>FORM <br></br></h1>
//       <Link to={'/registerform'} style={{ textAlign: "center", fontWeight: "bold", fontSize: "larger" }}>Gym Membership Form</Link>
//     </div >
//   )
// }

reportWebVitals();