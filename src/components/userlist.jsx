import React from "react";
import  { List } from "immutable";
import User from "./user.jsx";

let UserList = (props) => {
    let userElems = props.users.map(u => <User key={u.get("id")} user={u} />)
    return (
        <div>{userElems}</div>
    );
}

UserList.propTypes = {
    users: React.PropTypes.instanceOf(List).isRequired
}

export default UserList;