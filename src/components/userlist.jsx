import React from "react";
import { List } from "immutable";
import User from "./user.jsx";
import PropTypes from "prop-types";

let UserList = props => {
    const userElems = props.users.map(u => <User key={u.get("id")} user={u} />);
    const styles = { height: "100%", overflow: "auto" };
    return <div style={styles}>{userElems}</div>;
};

UserList.propTypes = {
    users: PropTypes.instanceOf(List).isRequired
};

export default UserList;
