import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./global.css";

import App from "./App";
import { StateContextProvider } from "./contexts/StateContextProvider";

ReactDOM.render(
  <StateContextProvider>
    <Router>
      <App />
    </Router>
  </StateContextProvider>,
  document.querySelector("#root")
);
