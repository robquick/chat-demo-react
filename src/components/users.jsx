import { connect } from "react-redux";
import UserList from "./userlist.jsx";

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

export default connect(mapStateToProps)(UserList);