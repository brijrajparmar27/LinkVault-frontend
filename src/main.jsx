import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LinkProvider } from "./contexts/LinkContext.jsx";
import { ModalProvider } from "./contexts/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <LinkProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </LinkProvider>
    </BrowserRouter>
);
