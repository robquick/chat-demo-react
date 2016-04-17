import Immutable from "immutable";
import * as types from "../actions";

const currentUser = (state = null, action) => {
    switch(action.type) {
        case types.SIGN_IN_USER: {
            state = Immutable.fromJS(action.user);
        }
    }
    return state;
}

export default currentUser;