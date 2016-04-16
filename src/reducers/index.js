import users from "./users";
import messages from "./messages";
import currentUser from "./currentUser";
import { combineReducers } from "redux";

export default combineReducers({
    currentUser,
    users,
    messages
});
