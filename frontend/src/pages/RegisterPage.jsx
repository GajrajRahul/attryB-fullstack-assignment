import React from 'react';
import { BsShieldLock } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/AuthStyle.css';

const RegisterPage = () => {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const obj = {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value
            }

            const resposnse = await axios.post("http://localhost:5050/api/user/register", { ...obj });

            if (resposnse.data.success) {
                window.alert(resposnse.data.message);
                navigate("/login");
            }
            else {
                window.alert(resposnse.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="wraper-div signup-form">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-logo">
                        <BsShieldLock style={{ fontSize: "2rem" }} />
                    </div>
                    <h2 className="user-heading">Register Form</h2>
                    <input type="text" name='name' placeholder='Name*' />
                    <input type="email" name='email' placeholder='Email*' />
                    <input type="password" name='password' placeholder='Password*' />
                    <button>Register</button>
                    <p className="account-check">Already Register! <Link to={"/login"}>Login here</Link></p>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;