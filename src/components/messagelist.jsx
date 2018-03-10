import React from "react";
import Message from "./message.jsx";
import { List } from "immutable";
import PropTypes from "prop-types";

class MessageList extends React.Component {
    componentWillUpdate() {
        const d = this.div;
        this.shouldScrollBottom =
            d.scrollTop + d.offsetHeight === d.scrollHeight;
    }

    componentDidUpdate() {
        if (this.shouldScrollBottom) {
            this.div.scrollTop = this.div.scrollHeight;
        }
    }

    componentDidMount() {
        this.div.scrollTop = this.div.scrollHeight;
    }

    render() {
        const styles = { height: "100%", overflow: "auto" };
        const messageElems = this.props.messages.map(m => (
            <Message key={m.get("id")} message={m} />
        ));
        return (
            <div style={styles} ref={e => (this.div = e)}>
                {messageElems}
            </div>
        );
    }
}

MessageList.propTypes = {
    messages: PropTypes.instanceOf(List).isRequired
};

export default MessageList;
