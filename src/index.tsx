import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "./index.css";
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./containers/App";
import stores from "./stores";

ReactDOM.render(
  <Provider twitch={stores.twitch}>
    <App />
  </Provider>,
  document.getElementById("root")
);
