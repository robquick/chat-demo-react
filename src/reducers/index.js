import users from "./users";
import messages from "./messages";
import { combineReducers } from "redux";

export default combineReducers({
    users,
    messages
});
