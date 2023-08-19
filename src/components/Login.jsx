import React from "react";
import { useState } from "react";
import "./Login.css";

function Login() {
  let [userName, setUserNmae] = useState("");
  let [password, setPassword] = useState("");
  let [userInfo, setUserInfo] = useState({
    email: "",
    firstName: "",
    gender: "",
    id: "",
    image: "",
    lastName: "",
    token: "....",
  });

  sessionStorage.setItem("user", JSON.stringify(userInfo));


  function fetchDetails() {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${userName}`,
        password: `${password}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        sessionStorage.setItem("user", JSON.stringify(data));
        if (data.message !== undefined) {
          alert(data.message);
        } else setUserInfo(data);
      })
      .catch((err) => console.log(err));
  }
  return (


    <div className="login-box">
      <div style={{ width: "100%", marginLeft: "80px " }}>
        {" "}
        <p>Welcome Back 👋</p>
      </div>
      <div style={{ width: "100%", marginLeft: "80px " }}>
        {" "}
        <h3>Login to your Account</h3>
      </div>
      <div className="box">
        <h5>Username:</h5>
        <input
          type="text"
          onChange={(e) => setUserNmae(e.target.value)}
          placeholder="Enter Username"
        />
      </div>
      <div className="box">
        <h5>Password:</h5>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
      </div>
      <div className="box">
        <button onClick={fetchDetails}>Log in</button>
      </div>


      {/* imformation */}

      <h3 style={{ color: "blue" }}>Your Information</h3>
      <div className="box">
        <h5>First Name: {userInfo.firstName}</h5>
        <h5>Last Name: {userInfo.lastName}</h5>
        <h5>Username: {userInfo.username}</h5>
        <h5>E-mail: {userInfo.email}</h5>
        <h5>Id: {userInfo.id}</h5>
        <h5>Gender: {userInfo.gender}</h5>
        <h5>Token: {userInfo.token.split(".")[0]}</h5>
      </div>
    </div>
  );
}

export default Login;
