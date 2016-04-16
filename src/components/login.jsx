import { connect } from "react-redux";
import { signInUser } from "../actions"
import LoginForm from "./loginform.jsx";

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: name => {
            dispatch(signInUser(name));
        }
    }
};

let Login = connect(null, mapDispatchToProps)(LoginForm);

export default Login;

