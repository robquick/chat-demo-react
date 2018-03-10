import React from "react";
import Users from "../containers/users.jsx";
import Messages from "../containers/messages.jsx";
import MessageInput from "../containers/messageinput.jsx";

const absStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
};
const fullHeightStyles = { height: "100%" };

let ChatRoom = () => {
    return (
        <div className="container-fluid" style={{ ...absStyles, top: 50 }}>
            <div className="row" style={fullHeightStyles}>
                <div
                    className="col-md-2"
                    style={{
                        ...fullHeightStyles,
                        borderRight: "1px solid",
                        borderColor: "#e7e7e7"
                    }}
                >
                    <Users />
                </div>

                <div className="col-md-10" style={fullHeightStyles}>
                    <div style={{ ...absStyles, bottom: 34 }}>
                        <Messages />
                    </div>

                    <div style={{ ...absStyles, top: undefined }}>
                        <MessageInput />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatRoom;
