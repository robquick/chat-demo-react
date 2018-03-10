import React from "react";
import styled from "styled-components";
import Users from "../containers/users.jsx";
import Messages from "../containers/messages.jsx";
import MessageInput from "../containers/messageinput.jsx";

// Absolutely positioned wrapper elements
const AbsoluteDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;
const Container = AbsoluteDiv.extend`
    top: 56px;
`;
const MessagesWrapper = AbsoluteDiv.extend`
    bottom: 34px;
`;
const InputWrapper = AbsoluteDiv.extend`
    top: auto;
`;

// Rows and columns
const OneHundredPercentHeightDiv = styled.div`
    height: 100%;
`;
const Row = OneHundredPercentHeightDiv.extend``;
const ColumnOne = OneHundredPercentHeightDiv.extend`
    border-right: 1px solid;
    border-color: #e7e7e7;
`;
const ColumnTwo = OneHundredPercentHeightDiv.extend``;

let ChatRoom = () => {
    return (
        <Container className="container-fluid">
            <Row className="row">
                <ColumnOne className="col-md-2">
                    <Users />
                </ColumnOne>

                <ColumnTwo className="col-md-10">
                    <MessagesWrapper>
                        <Messages />
                    </MessagesWrapper>

                    <InputWrapper>
                        <MessageInput />
                    </InputWrapper>
                </ColumnTwo>
            </Row>
        </Container>
    );
};

export default ChatRoom;
