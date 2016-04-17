import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "../components/app.jsx";
import ChatRoom from "../components/chatroom.jsx";
import Error from "../components/error.jsx";
import Login from "../components/login.jsx";
import store from "../store";

const requireLogin = (nextState, replace) => {
  let currentUser = store.getState().currentUser;
  if (!currentUser) {
    replace({ pathname: "/login" });
  }
};

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ChatRoom} onEnter={requireLogin} />
    <Route path="login" component={Login} />
    <Route path="*" component={Error} />
  </Route>
);

export default routes;
