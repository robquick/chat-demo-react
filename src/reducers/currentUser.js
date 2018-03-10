import Immutable from "immutable";
import * as types from "../actions";

const currentUser = (state = null, action) => {
    let newState;
    switch (action.type) {
        case types.SIGN_IN_USER:
            newState = Immutable.fromJS(action.user);
            break;
        default:
            newState = state;
    }
    return newState;
};

export default currentUser;
