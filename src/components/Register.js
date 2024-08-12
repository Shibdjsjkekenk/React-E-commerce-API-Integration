import React, { useState } from "react"
import styled from "styled-components"
// import "./register.css"
import axios from "axios"
// import { useHistory } from "react-router-dom"

const Register = () => {

    // const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message)
                    // history.push("/login")
                })
        } else {
            alert("invlid input")
        }

    }

    const Register = styled.section`

    
.register {
    width: 400px;
    background: #fff;
    border: 1px solid #dddfe2;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    border-radius: 8px;
    padding: 1rem;
    align-items: center;
    text-align: center;
}

.register > input {
    border-radius: 8px;
    border: 2px solid #dddfe2;
    outline: none;
    color: #1d2129;
    margin: 0.5rem 0;
    padding: 0.5rem 0.75rem;
    width: 92%;
    font-size: 1rem;
}

.register > .button {
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
        <Register>
            <div className="top">
                <div className="register">
                    {console.log("User", user)}
                    <h1>Register</h1>
                    <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                    <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                    <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                    <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
                    <div className="button" onClick={register} >Register</div>
                    <div>or</div>
                    <div className="button" onClick={() => ("/login")}>Login</div>
                </div>
            </div>
        </Register>

    )
}

export default Register