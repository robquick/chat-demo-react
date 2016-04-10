import React from "react";

let Message = (props) => {
  let msg = props.message;
  return (
      <div>{msg.name} > {msg.text}</div>
  );  
};

Message.propTypes = {
  message: React.PropTypes.object.isRequired  
};

export default Message;