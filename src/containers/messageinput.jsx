import { connect } from "react-redux";
import { sendMessage } from "../actions";
import MessageInputForm from "../components/messageinputform.jsx";

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text) => {
            dispatch(sendMessage(text));
        }
    }
};

let MessageInput = connect(null, mapDispatchToProps)(MessageInputForm);

export default MessageInput;

