import { connect } from "react-redux";
import MessageList from "../components/messagelist.jsx";

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
};

let Messages = connect(mapStateToProps)(MessageList);

export default Messages;