import React from "react";
import { Map } from "immutable";

let User = (props) => {
    const user = props.user;
    return (
        <div>{user.get("name")}</div>
    );
}

User.propTypes = {
    user: React.PropTypes.instanceOf(Map).isRequired
}

export default User;