import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { signInUser } from "../actions";
import LoginForm from "../components/loginform.jsx";

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: name => {
            dispatch(signInUser(name));
        }
    };
};

const Login = withRouter(connect(null, mapDispatchToProps)(LoginForm));

export default Login;
