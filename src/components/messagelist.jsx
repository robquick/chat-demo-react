import React from "react";
import Message from "./message.jsx";
import { List } from "immutable";

class MessageList extends React.Component {
    componentWillUpdate() {
        const d = this.div;
        this.shouldScrollBottom = (d.scrollTop + d.offsetHeight) === d.scrollHeight;
    }   
    
    componentDidUpdate() {
        if (this.shouldScrollBottom) {
            this.div.scrollTop = this.div.scrollHeight;
        }
    }
     
    render() {
        let messageElems = this.props.messages.map(m => <Message key={m.get("id")} message={m} />)
        return (
            <div ref={e => this.div = e}>{messageElems}</div>
        );  
    }
}

MessageList.propTypes = {
    messages: React.PropTypes.instanceOf(List).isRequired
};

export default MessageList;