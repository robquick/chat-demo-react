import Firebase from "firebase";
let firebaseRef = Firebase("URL HERE");

export const SEND_MESSAGE = "SEND_MESSAGE";
export const LOGIN_USER = "LOGIN_USER";
export const RECEIVED_USERS = "RECEIVED_USERS";
export const RECEIVED_MESSAGE = "RECEIVED_MESSAGE";

export function sendMessage(text) {
    console.log(text);
    return (dispatch, getState) => {
        var userName = getState().currentUser.name;
        firebaseRef.child("messages").push({ userName, text }).then(function() {
            dispatch({ type: SEND_MESSAGE, userName, text });
        });
    }
}

export function loginUser(name) {
    console.log(name);
    return dispatch => {
        firebaseRef.child("users").push({ name }).then(function() {
            dispatch({
                type: LOGIN_USER,
                name
            });
        });
    }
}

export function startListeningForUsers() {
    return dispatch => {
        firebaseRef.child("users").on("value", function(snapshot) {
            dispatch({
               type: RECEIVED_USERS,
               data: snapshot.val()
            });
        });
    }
}

export function startListeningForMessages() {
    return dispatch => {
        firebaseRef.child("messages").on("child_added", function(snapshot) {
            dispatch({
               type: RECEIVED_MESSAGE,
               message: snapshot.val()
            });
        });
    }
}