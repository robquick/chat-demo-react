import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "../components/app.jsx";
import ChatRoom from "../components/chatroom.jsx";
import Error from "../components/error.jsx";

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ChatRoom} />
    <Route path="*" component={Error} />
  </Route>
);

export default routes;
