import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import { global, reset } from "./styles";
import { BuildingsProvider } from "./context/buildings-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Global styles={global} />
    <Global styles={reset} />
    <BrowserRouter>
      <BuildingsProvider>
        <App />
      </BuildingsProvider>
    </BrowserRouter>
  </>
);
