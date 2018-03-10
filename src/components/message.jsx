import React from "react";
import PropTypes from "prop-types";

const msgStyles = { fontSize: "large", border: "1px solid #e7e7e7" };
const nameStyles = { fontWeight: "bold", paddingTop: 5, paddingLeft: 10 };
const textStyles = { paddingBottom: 5, paddingLeft: 10 };

let Message = props => {
    const msg = props.message;
    return (
        <div style={msgStyles}>
            <div style={nameStyles}>{msg.get("userName")}</div>
            <div style={textStyles}>{msg.get("text")}</div>
        </div>
    );
};

Message.propTypes = {
    message: PropTypes.object.isRequired
};

export default Message;
