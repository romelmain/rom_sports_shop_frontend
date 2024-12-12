import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Menu from "../components/Menu";

function HomePage() {
  if (localStorage.getItem("id") == null) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return (
    <>
      <Menu></Menu>

      <center>
        <div className="textoTitulo">HomePage</div>
      </center>
    </>
  );
}

export default HomePage;
