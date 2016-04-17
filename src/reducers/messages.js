import Immutable from "immutable";
import * as types from "../actions";

const messages = (state = Immutable.List(), action) => {
    switch (action.type) {
       case types.RECEIVED_MESSAGE:
            var newMessage = Immutable.fromJS(action.message);
            state = state.push(newMessage);
            break;
    }
    return state;
}

export default messages;