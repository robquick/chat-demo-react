import { connect } from "react-redux";
import UserList from "../components/userlist.jsx";

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

let Users = connect(mapStateToProps)(UserList);

export default Users;