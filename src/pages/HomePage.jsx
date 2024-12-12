import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Menu from "../components/Menu";
import HeaderComponent from "../components/HeaderComponent";

function HomePage() {
  if (localStorage.getItem("id") == null) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return (
    <>
      <Menu></Menu>

      <center>
        <HeaderComponent header="Home Page"></HeaderComponent>
      </center>
    </>
  );
}

export default HomePage;
