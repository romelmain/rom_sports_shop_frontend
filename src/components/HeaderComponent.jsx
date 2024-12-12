import React from "react";

function HeaderComponent(props) {
  return (
    <>
      <center>
        <div className="textoTitulo">{props.header}</div>
      </center>
    </>
  );
}

export default HeaderComponent;
