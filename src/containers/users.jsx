import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserList from "../components/userlist.jsx";

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

const Users = withRouter(connect(mapStateToProps)(UserList));

export default Users;
