import React from "react";
import ReactDom from "react-dom";
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import routes from "./routes";
import store from "./store";
import boostrapCSS from "bootstrap/dist/css/bootstrap.min.css";

const reactElem = (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
);

const domElem = document.getElementById("container");

ReactDom.render(reactElem, domElem);