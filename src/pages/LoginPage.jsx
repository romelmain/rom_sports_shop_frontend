import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import React, { useEffect, useState } from "react";
import { login } from "../components/login";

function LoginPage() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const hamdleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    console.log("Formulario Enviado");
    console.log(e.target);
    const myFormData = new FormData(e.target);
    const dataArray = [...myFormData];
    const data = Object.fromEntries(dataArray);
    console.log(data.username);
    console.log(data.password);
    login(data).then((apiResponse) => {
      if (apiResponse.code == 200) {
        console.log("OKKK");
        navigate("/");
        return;
      } else {
        console.log("NO OKKK");
        console.log(apiResponse.message);
      }
    });
  };

  const handleUserInput = (e) => {
    setUser({ ...user, username: e.target.value });
  };

  const handlePasswordInput = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  return (
    <form onSubmit={hamdleSubmit} className="form">
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        id="username"
        className="box"
        placeholder="Enter Username"
        onChange={handleUserInput}
        value={user.username}
      ></input>
      <input
        type="password"
        name="password"
        id="password"
        className="box"
        placeholder="Enter Password"
        onChange={handlePasswordInput}
        value={user.password}
      ></input>
      <button id="botonLogin">Login</button>
    </form>
  );
}

export default LoginPage;
