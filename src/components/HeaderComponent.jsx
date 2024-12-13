import React from "react";

function HeaderComponent(props) {
  return (
    <>
      <center>
        <div className="textoTitulo">
          <strong>{props.header}</strong>
        </div>
      </center>
    </>
  );
}

export default HeaderComponent;
