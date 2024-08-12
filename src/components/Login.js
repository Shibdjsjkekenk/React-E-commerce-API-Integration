import React, { useState } from "react"
import styled from "styled-components";
// import "./login.css"
import axios from "axios"
// import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser }) => {

    // const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                // history.push("/")
            })
    }
    const Login = styled.section`

    .login {
        width: 400px;
        background: #fff;
        border: 1px solid #dddfe2;
        box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
        border-radius: 8px;
        padding: 1rem;
        align-items: center;
        text-align: center;
    }
    
    .login > input {
        border-radius: 8px;
        border: 2px solid #dddfe2;
        outline: none;
        color: #1d2129;
        margin: 0.5rem 0;
        padding: 0.5rem 0.75rem;
        width: 92%;
        font-size: 1rem;
    }
    
    .login > .button {
        background: #1877f2;
        border: 1px solid #1877f2;
        color: #fff;
        font-size: 1.25rem;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: 8px;
        outline: none;
        cursor: pointer;
    }
    .top {
     display: flex;
     justify-content: center;
     padding-top: 50px;
   }
   @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top{
        margin:45px;
        padding-top: 0px;

    }
   }
    `;
    return (
        <Login>
            <div className="top">
                <div className="login">
                    <h1>Login</h1>
                    <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                    <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
                    <div className="button" onClick={login}>Login</div>
                    <div>or</div>
                    <div className="button" onClick={() => ("/register")}>Register</div>
                </div>
            </div>
        </Login>

    )
}

export default Login