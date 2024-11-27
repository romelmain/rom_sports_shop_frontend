import React, { useContext, useEffect, useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import ModalLogout from "./modalLogout";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalLogoutContext } from "../contexts/modallogout.context";

function Menu() {
  const { show, setShow, setModal } = useContext(ModalLogoutContext);
  return (
    <>
      <nav>
        <label className="logo">Rom Sport Shop</label>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link onClick={setModal} to="#">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <ModalLogout></ModalLogout>
      </div>
    </>
  );
}

export default Menu;
