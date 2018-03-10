import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MessageDiv = styled.div`
    font-size: large;
    border: 1px solid #e7e7e7;
`;

const UserNameDiv = styled.div`
    font-weight: bold;
    padding-top: 5px;
    padding-left: 10px;
`;

const TextDiv = styled.div`
    padding-bottom: 5px;
    padding-left: 10px;
`;

const Message = props => {
    const msg = props.message;
    return (
        <MessageDiv>
            <UserNameDiv>{msg.get("userName")}</UserNameDiv>
            <TextDiv>{msg.get("text")}</TextDiv>
        </MessageDiv>
    );
};

Message.propTypes = {
    message: PropTypes.object.isRequired
};

export default Message;
