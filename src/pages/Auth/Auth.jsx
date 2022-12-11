import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      {isClicked ? <SignUp /> : <Login setIsClicked={setIsClicked} />}
    </div>
  );
}

//?LOGIN COMPONENT----------------------------------------
function Login({ setIsClicked }) {
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
          <span
            style={{ fontSize: "13px", fontWeight: "bold" }}
            onClick={() => setIsClicked(true)}
          >
            Don't have an account? Sign Up
          </span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}

//?SIGN UP COMPONENT-------------------------------------------

function SignUp() {
  const [user, setuser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const setCredentials = (event) => {
    let { name, value } = event.target;
    setuser({ ...user, [name]: value });
  };

  const setUser = async () => {
    await axios
      .post(
        `http://localhost:5000/auth/register/?firstName=${user.firstName}&lastName=${user.lastName}&userName=${user.userName}&password=${user.password}&confirmPassword=${user.confirmPassword}`
      )
      .then((response) => {
        const user = response.data;
        console.log(user);
      });
  };
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
          <span>Alredy have an account. Login!</span>
        </div>

        <Link
          to={`/home/${user.userName}`}
          onClick={setUser}
          style={{ textDecoration: "none" }}
        >
          <button className="button infoButton" type="submit">
            SignUp
          </button>
        </Link>
      </form>
    </div>
  );
}
export default Auth;
