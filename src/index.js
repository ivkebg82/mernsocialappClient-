import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Context } from "./Context";
ReactDOM.render(
  <Context>
    <Router>
      <App />
    </Router>
  </Context>,
  document.getElementById("root")
);
