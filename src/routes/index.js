import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "../components/app.jsx";

let routes = (
  <Route path="/" component={App}>
    <IndexRoute />
  </Route>
);

export default routes;
