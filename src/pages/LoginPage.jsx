import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import "./Login.css";
import React, { useContext, useEffect, useState } from "react";

function LoginPage() {
  const { user, setUser, login, status, setStatus } = useContext(UserContext);

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
    login();
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
