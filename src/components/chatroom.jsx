import React from "react";
import styled from "styled-components";
import Users from "../containers/users.jsx";
import Messages from "../containers/messages.jsx";
import MessageInput from "../containers/messageinput.jsx";

// Absolutely positioned wrapper elements
const Container = styled.div`
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 0;
`;
const MessagesWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 34px;
`;
const InputWrapper = styled.div`
    position: absolute;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
`;

// Rows and columns
const Row = styled.div`
    height: 100%;
`;
const ColumnOne = styled.div`
    height: 100%;
    border-right: 1px solid;
    border-color: #e7e7e7;
`;
const ColumnTwo = styled.div`
    height: 100%;
`;

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
