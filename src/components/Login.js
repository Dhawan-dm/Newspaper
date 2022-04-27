import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from "react-router-dom"
export default function Login() {
    const [credentials, setcredentials] = useState({email :"", password :""})
    let navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.success)
        {
            localStorage.setItem('token', json.authtoken);
            navigate('/');
        }
        else
        {
            alert("Invalid Credentials")
        }
    }
    const onChange = (e)=>{
        setcredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <div className='squ'>

                <section id="log" className="container1">
                    <form onSubmit={handleLogin} >
                        <div id="head">
                            <h1 className="head">Login</h1>

                        </div>
                        <div className="box">
                            <i className="fa fa-envelope"></i>
                            <input type="text" name="email" id="email" className="inp"onChange={onChange} value={credentials.email} placeholder="Enter Your email ID" />
                        </div>

                        <div className="box">
                            <i className="fa fa-unlock-alt"></i>
                            <input type="password" name="password" id="password" onChange={onChange} value={credentials.password} className="inp" placeholder="Enter Your Password" />
                        </div>

                        <div id="btn1">

                            <button type="Submit" className="btn1"  >Login</button>
                        </div>

                    </form>
                </section></div>
        </div>
    )
}