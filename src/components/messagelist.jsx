import React from "react";
import Message from "./message.jsx";

let MessageList = (props) => {
  let messageElems = props.messages.map(m => <Message message={m} />)
  return (
      <div>{messageElems}</div>
  );  
};

MessageList.propTypes = {
    messages: React.PropTypes.array.isRequired
};

export default MessageList;