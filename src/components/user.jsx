import React from "react";
import { Map } from "immutable";
import PropTypes from "prop-types";
import styled from "styled-components";

const UserDiv = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: x-large;
`;

let User = props => {
    const userName = props.user.get("name");
    return <UserDiv title={userName}>{userName}</UserDiv>;
};

User.propTypes = {
    user: PropTypes.instanceOf(Map).isRequired
};

export default User;
