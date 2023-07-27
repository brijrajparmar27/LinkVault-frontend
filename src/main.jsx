import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LinkProvider } from "./contexts/LinkContext.jsx";
import { ModalProvider } from "./contexts/ModalContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LinkProvider>
      <ModalProvider>
        <AuthProvider>
          <MantineProvider
            theme={{ fontFamily: "Open Sans" }}
            withGlobalStyles
            withNormalizeCSS
          >
            <App />
          </MantineProvider>
        </AuthProvider>
      </ModalProvider>
    </LinkProvider>
  </BrowserRouter>
);
