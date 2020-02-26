import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";


const Login = (props) => {
  const [userCreds, setUserCreds] = useState({ username: "", password: "" });

  const handleChange = e => {
    setUserCreds({
      ...userCreds,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", userCreds)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage");
      })
      .catch(err => console.log("Something is broken", err));
  };

  return (
    <div style={loginStyle}>
      <h1>Bubble Fans Only!</h1>
      <form style={formStyle} onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={userCreds.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={userCreds.password}
          onChange={handleChange}
        />
        <button style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

const loginStyle = {
  margin: '0 auto',
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
}
const buttonStyle = {
  width: '105px'
}

const formStyle = {
  margin: '0 auto'
}


export default Login;
