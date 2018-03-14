import Immutable from "immutable";
import * as types from "../actions";

const users = (state = Immutable.List(), action) => {
    let newState;
    switch (action.type) {
        case types.RECEIVED_USER: {
            const user = Immutable.fromJS(action.user);
            newState = state.push(user);
            break;
        }
        case types.REMOVE_USER: {
            const userIndex = state.findIndex(u => u === action.id);
            newState = state.delete(userIndex);
            break;
        }
        default:
            newState = state;
    }
    return newState;
};

export default users;
