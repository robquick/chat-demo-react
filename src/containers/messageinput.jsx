import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { sendMessage } from "../actions";
import MessageInputForm from "../components/messageinputform.jsx";

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: text => {
            dispatch(sendMessage(text));
        }
    };
};

const MessageInput = withRouter(
    connect(null, mapDispatchToProps)(MessageInputForm)
);

export default MessageInput;
