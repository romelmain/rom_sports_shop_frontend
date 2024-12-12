import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ModalLogoutContext } from "../contexts/modallogout.context";
import { useNavigate } from "react-router-dom";

function ModalLogout(props) {
  const { show, setShow, closeModal } = useContext(ModalLogoutContext);

  const navigate = useNavigate();

  const logout = () => {
    closeModal();

    localStorage.removeItem("id");
    localStorage.removeItem("id_cart");
    navigate("/");
    window.location.reload();
  };

  return (
    <Modal show={show} onHide={!show} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to exit the application?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={logout}>
          Logout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalLogout;
