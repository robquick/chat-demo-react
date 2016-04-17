import Firebase from "firebase";
import { browserHistory } from "react-router";

let firebaseRef = new Firebase("https://brownbag-hsg.firebaseio.com/");

export const SEND_MESSAGE = "SEND_MESSAGE";
export const SIGN_IN_USER = "SIGN_IN_USER";
export const RECEIVED_USER = "RECEIVED_USER";
export const REMOVE_USER = "REMOVE_USER";
export const INITIALIZE_USERS = "INITIALIZE_USERS";
export const RECEIVED_MESSAGE = "RECEIVED_MESSAGE";

export function sendMessage(text) {
    return (dispatch, getState) => {
        const userName = getState().currentUser.get("name");
        firebaseRef.child("messages").push({ userName, text }).then(() => {
            dispatch({ type: SEND_MESSAGE, userName, text });
        });
    }
}

export function signInUser(name) {
    return dispatch => {
        let newUserRef = firebaseRef.child("users").push();
        newUserRef.set({ name }).then(() => {
            dispatch({
                type: SIGN_IN_USER,
                user: { id: newUserRef.key(), name }
            });
            newUserRef.onDisconnect().remove();
            browserHistory.push("/")
        });
    }
}

export function startListeningForUsers() {
    return dispatch => {
        let usersRef = firebaseRef.child("users");
        usersRef.on("child_added", snapshot => {
            dispatch({
                type: RECEIVED_USER,
                user: { ...snapshot.val(), id: snapshot.key() } 
            })
        });
        usersRef.on("child_removed", snapshot => {
            dispatch({
               type: REMOVE_USER,
               id: snapshot.val().id 
            });
        })
    }
}

export function startListeningForMessages() {
    return dispatch => {
        firebaseRef.child("messages").on("child_added", snapshot => {
            dispatch({
               type: RECEIVED_MESSAGE,
               message: { ...snapshot.val(), id: snapshot.key() }
            });
        });
    }
}