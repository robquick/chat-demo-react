import Immutable from "immutable";
import * as types from "../actions";

const messages = (state = Immutable.List(), action) => {
    switch (action.type) {
       case types.RECEIVED_MESSAGE:
            var newMessage = Immutable.Map({
                userName: action.userName,
                text: action.text
            });
            state = state.push(newMessage);
            break;
    }
    return state;
}

export default messages;