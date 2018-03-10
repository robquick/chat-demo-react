import Immutable from "immutable";
import * as types from "../actions";

const messages = (state = Immutable.List(), action) => {
    let newState;
    switch (action.type) {
        case types.RECEIVED_MESSAGE: {
            const newMessage = Immutable.fromJS(action.message);
            newState = state.push(newMessage);
            break;
        }
        default:
            newState = state;
    }
    return newState;
};

export default messages;
