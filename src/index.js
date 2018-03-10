import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import * as actions from "./actions";
import AppContainer from "./containers/appcontainer";
import "bootstrap/dist/css/bootstrap.css";

const reactElem = (
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
);

const domElem = document.getElementById("container");

ReactDom.render(reactElem, domElem);

setTimeout(() => {
    store.dispatch(actions.startListeningForUsers());
    store.dispatch(actions.startListeningForMessages());
});
