import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MessageList from "../components/messagelist.jsx";

const mapStateToProps = state => {
    return {
        messages: state.messages
    };
};

let Messages = withRouter(connect(mapStateToProps)(MessageList));

export default Messages;
