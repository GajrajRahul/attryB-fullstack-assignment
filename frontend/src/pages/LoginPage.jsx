import React from 'react';
import { BsShieldLock } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/AuthStyle.css';

const LoginPage = () => {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const obj = {
        email: e.target.email.value,
        password: e.target.password.value
      }

      const response = await axios.post("http://localhost:5050/api/user/login", { ...obj });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
      else {
        window.alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="wraper-div signup-form">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-logo">
            <BsShieldLock style={{ fontSize: "2rem" }} />
          </div>
          <h2 className="user-heading">Login</h2>
          <input type="email" name='email' placeholder='Email' />
          <input type="password" name='password' placeholder='Password' />
          <button>Login</button>
          <p className="account-check"> Register <Link to={"/register"}> here</Link></p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;