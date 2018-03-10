import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import App from "../components/app";

const mapStateToProps = state => {
    return { currentUser: state.currentUser, foo: 1 };
};

const AppContainer = withRouter(connect(mapStateToProps)(App));

export default AppContainer;
