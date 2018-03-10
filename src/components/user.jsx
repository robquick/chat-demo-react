import React from "react";
import { Map } from "immutable";
import PropTypes from 'prop-types';

const styles = { 
    overflow: "hidden", 
    textOverflow: "ellipsis", 
    fontSize: "x-large" 
};

let User = (props) => {
    const userName = props.user.get("name");
    return (
        <div style={styles} title={userName}>{userName}</div>
    );
}

User.propTypes = {
    user: PropTypes.instanceOf(Map).isRequired
}

export default User;