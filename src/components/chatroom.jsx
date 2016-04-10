import React from "react";
import Users from "./users.jsx";
import Messages from "./messages.jsx";
import MessageInput from "./messageinput.jsx";

let ChatRoom = () => {
    return (
      <div className="container-fluid" style={{position: "absolute", top: 50, left: 0, right: 0, bottom: 0}}>
        <div className="row" style={{height: "100%"}}>
            <div className="col-md-2" style={{height: "100%"}}>
                <Users />
            </div>
            <div className="col-md-10" style={{height: "100%"}}>
                <div style={{position: "absolute", bottom: 34, top: 0, right: 0, left: 0}}>
                    <Messages />
                </div>
                
                <div style={{position: "absolute", bottom: 0, left: 0, right: 0}}>
                    <MessageInput />
                </div>
            </div>
        </div>
      </div>  
    );
};

export default ChatRoom;

