import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { withRouter } from "./hooks/withRouter";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware } from "redux";
// import {theReducer} from './reducers/index';
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// ReactDOM.render(<Router><AppWithRouter /></Router>, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
