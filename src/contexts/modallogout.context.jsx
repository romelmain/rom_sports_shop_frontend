import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

const ModalLogoutContext = createContext();

function ModalLogoutProviderWrapper(props) {
  const [show, setShow] = useState(false);

  const setModal = () => {
    setShow(!show);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <ModalLogoutContext.Provider
      value={{ show, setShow, setModal, closeModal }}
    >
      {props.children}
    </ModalLogoutContext.Provider>
  );
}

export { ModalLogoutContext, ModalLogoutProviderWrapper };
