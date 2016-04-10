import React from "react";

let UserList = (props) => {
    let userElems = props.users.map(u => <div>{u.name}</div>)
    return (
        <div>{userElems}</div>
    );
}

UserList.propTypes = {
    users: React.PropTypes.array.isRequired
}

export default UserList;