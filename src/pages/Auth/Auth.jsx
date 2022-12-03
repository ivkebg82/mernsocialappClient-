import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

function Auth() {
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div>
          <h1>ZKC Media</h1>
          <h4>Explore the ideas throughout the world</h4>
        </div>
      </div>
      {/*  <SignUp /> */}
      <Login />
    </div>
  );
}

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
function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastName"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="username"
            name="username"
          />
        </div>
        <div>
          <input type="text" className="infoInput" placeholder="password" />
          <input
            type="text"
            className="infoInput"
            placeholder="confirm password"
          />
        </div>
        <div>
          <span>Alredy have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
}
export default Auth;
