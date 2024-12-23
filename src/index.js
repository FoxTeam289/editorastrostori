/** @format */

import React from "react";
import { createRoot } from "react-dom/client";
import AppWrapper from "./context/state";
import App from "./components/App";

import "./styles/styles.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.StrictMode>
);
