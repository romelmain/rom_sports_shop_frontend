import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ModalLogoutProviderWrapper } from "./contexts/modallogout.context.jsx";

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <ModalLogoutProviderWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ModalLogoutProviderWrapper>

  //</StrictMode>,
);
