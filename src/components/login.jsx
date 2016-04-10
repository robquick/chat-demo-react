import { connect } from "react-redux";
import { loginUser } from "../actions"
import LoginForm from "./loginform.jsx";

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: name => {
            dispatch(loginUser(name));
        }
    }
};

let Login = connect(null, mapDispatchToProps)(LoginForm);

export default Login;

