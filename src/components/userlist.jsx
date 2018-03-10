import React from "react";
import { List } from "immutable";
import User from "./user.jsx";
import PropTypes from "prop-types";
import styled from "styled-components";

const UserDiv = styled.div`
    height: 100%;
    overflow: auto;
`;

const UserList = props => {
    const userElems = props.users.map(u => <User key={u.get("id")} user={u} />);
    return <UserDiv>{userElems}</UserDiv>;
};

UserList.propTypes = {
    users: PropTypes.instanceOf(List).isRequired
};

export default UserList;
