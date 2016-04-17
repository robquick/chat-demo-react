import React from "react";
import { Map } from "immutable";

const styles = { overflow: "hidden", textOverflow: "ellipsis" };

let User = (props) => {
    const userName = props.user.get("name");
    return (
        <div style={styles} title={userName}>{userName}</div>
    );
}

User.propTypes = {
    user: React.PropTypes.instanceOf(Map).isRequired
}

export default User;