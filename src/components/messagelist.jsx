import React from "react";
import Message from "./message.jsx";

class MessageList extends React.Component {
    componentWillUpdate() {
        const d = this.div;
        this.shouldScrollBottom = d.scrollTop + d.offsetHeight === d.scrollHeight;
    }   
    
    componentDidUpdate() {
        if (this.shouldScrollBottom) {
            this.div.scrollTop = this.div.scrollHeight;
        }
    }
     
    render(props) {
        let messageElems = props.messages.map(m => <Message message={m} />)
        return (
            <div ref={e => this.div = e}>{messageElems}</div>
        );  
    }
}

MessageList.propTypes = {
    messages: React.PropTypes.array.isRequired
};

export default MessageList;