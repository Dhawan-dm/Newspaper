import React, { useState } from 'react'
import "./SignUp.css"
import { useNavigate } from "react-router-dom"
export default function SignUp() {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const { name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password})
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            navigate('/');
        }
    }
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className='squ'>

                <section id="log" className="container1">
                    <form action=""  onSubmit={handleLogin} >
                        <div id="head">
                            <h1 className="head">SignUp</h1>

                        </div>
                        <div className="box">
                            <i className="fa fa-envelope"></i>
                            <input type="text" name="name" id="name" className="inp" onChange={onChange} placeholder="Enter Your name" />
                        </div>

                        <div className="box">
                            <i className="fa fa-envelope"></i>
                            <input type="text" name="email" id="email" className="inp" onChange={onChange} placeholder="Enter Your email ID" />
                        </div>

                        <div className="box">
                            <i className="fa fa-unlock-alt"></i>
                            <input type="password" name="password" id="password" className="inp" onChange={onChange} minLength={5} placeholder="Enter Your Password" />
                        </div>

                        <div className="box">
                            <i className="fa fa-unlock-alt"></i>
                            <input type="password" name="cpassword" id="cpassword" className="inp" onChange={onChange} minLength={5} placeholder="Conform Your Password" />
                        </div>

                        <div id="btn1">

                            <button type='Submit' className="btn1"  >Sign Up</button>
                        </div>

                    </form>
                </section></div>
        </div>
    )
}
