// import PropTypes from 'prop-types';
import React from 'react';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom"

export default function Navbar(){
  let navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }
  
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">Navbar</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
        {/* <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/general">General</Link></li> */}
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology">Technology</Link></li>
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/Login">Login</Link></li>
        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/signup">SignUp</Link></li>
      </ul>
      </form>:<button className='btn btn-primary' onClick={handleLogout} >Logout</button>}
    </div>
  </div>
</nav>
        </>
    );
  }

