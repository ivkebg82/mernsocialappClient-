import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useUserState } from "../../Context";
import axios from "axios";
import { Navigate, redirect } from "react-router-dom";
function Auth() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div>
          <h1>ZKC Media</h1>
          <h4>Explore the ideas throughout the world</h4>
        </div>
      </div>
      {isClicked ? <Login /> : <SignUp setIsClicked={setIsClicked} />}
    </div>
  );
}

//?LOGIN COMPONENT----------------------------------------
function Login() {
  return (
    <div className="login">
      <form className="loginForm">
        <h2>Log In</h2>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Username"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput "
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "13px", fontWeight: "bold" }}>
            Don't have an account? Sign Up
          </span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

//?SIGN UP COMPONENT-------------------------------------------

function SignUp({ setIsClicked }) {
  const { user, setUser } = useUserState();
  console.log(user);
  const setCredentials = (event) => {
    let { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `http://localhost:5000/auth/register/?firstName=${user.firstName}&lastName=${user.lastName}
    &userName=${user.userName}&password=${user.password}&confirmPassword=${user.confirmPassword}`
      )
      .then((response) => {
        const user = response.data;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="a-right">
      <form className="infoForm authForm" onSubmit={register}>
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstName"
            onChange={setCredentials}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastName"
            onChange={setCredentials}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="username"
            name="userName"
            onChange={setCredentials}
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="password"
            name="password"
            onChange={setCredentials}
          />
          <input
            type="text"
            className="infoInput"
            placeholder="confirm password"
            name="confirmPassword"
            onChange={setCredentials}
          />
        </div>
        <div>
          <span onClick={() => setIsClicked(true)}>
            Alredy have an account. Login!
          </span>
        </div>
        <button className="button infoButton">SignUp</button>
      </form>
    </div>
  );
}
export default Auth;
