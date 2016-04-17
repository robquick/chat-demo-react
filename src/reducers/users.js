import Immutable from "immutable";
import * as types from "../actions";

const users = (state = Immutable.List(), action) => {
    switch (action.type) {
        case types.INITIALIZE_USERS: {
            const users = action.users || [];
            const immutableUsers = users.map(u => Immutable.fromJS(u));
            state = Immutable.List(immutableUsers);
            break;
        }
        case types.RECEIVED_USER: {
            let user = Immutable.fromJS(action.user);
            state = state.push(user);
            break;
        }
        case types.REMOVE_USER: {
            let userIndex = state.findIndex(u => u === action.id);
            state = state.delete(userIndex);
            break;
        }
    }
    return state;
}

export default users;