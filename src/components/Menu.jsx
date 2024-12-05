import React, { useContext, useEffect, useState } from "react";
import "./Menu.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import ModalLogout from "./modalLogout";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalLogoutContext } from "../contexts/modallogout.context";
import empty_cart from "../assets/empty-react-cart.png";
import full_cart from "../assets/full-react-cart.png";
import full_cart2 from "../assets/full-react-cart2.png";

function Menu() {
  const { show, setShow, setModal } = useContext(ModalLogoutContext);

  return (
    <>
      <Navbar className="transparentNavBar" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Rom Sport Shop</Navbar.Brand>
          <Nav>
            <Nav.Link href="#">
              {localStorage.getItem("id_cart") == null ||
              localStorage.getItem("id_cart") == "" ? (
                <img
                  id="imgCart"
                  width="35px"
                  height="35px"
                  src={empty_cart}
                ></img>
              ) : (
                <img
                  id="imgCart"
                  width="35px"
                  height="35px"
                  src={full_cart2}
                ></img>
              )}
            </Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/settings">Settings</Nav.Link>
            <Nav.Link onClick={setModal}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <ModalLogout></ModalLogout>
    </>
  );
}

export default Menu;
