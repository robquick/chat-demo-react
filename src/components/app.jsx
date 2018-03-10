import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./header.jsx";
import ChatRoom from "../components/chatroom.jsx";
import Error from "../components/error.jsx";
import Login from "../containers/login.jsx";

const App = props => {
    const currentUser = props.currentUser;
    const renderLoginIfNeeded = props =>
        !currentUser ? <Login /> : <Redirect to={{ pathname: "/" }} />;
    const renderMainIfPermitted = props =>
        currentUser ? <ChatRoom /> : <Redirect to={{ pathname: "/login" }} />;

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/login" render={renderLoginIfNeeded} />
                <Route exact path="/" render={renderMainIfPermitted} />
                <Route component={Error} />
            </Switch>
        </div>
    );
};

export default App;
