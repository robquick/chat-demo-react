import { connect } from "react-redux";
import MessageList from "./messagelist.jsx";

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
};

export default connect(mapStateToProps)(MessageList);