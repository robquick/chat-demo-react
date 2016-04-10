import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "../components/app.jsx";
import ChatRoom from "../components/chatroom.jsx";

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ChatRoom} />
  </Route>
);

export default routes;
