import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Navbar, SidemenuDrawer } from "./layouts";
import { Auth0Provider } from "@auth0/auth0-react";
import Context from "./context/Context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Context>
      <Auth0Provider
        domain="" //your auth0 key
        clientId="" //your auth0 key
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <BrowserRouter>
          <Navbar />
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </Context>
  </React.StrictMode>
);
