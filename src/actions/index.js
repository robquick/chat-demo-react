import Firebase from "firebase";
let firebaseRef = Firebase("https://brownbag-hsg.firebaseio.com/");

export const SEND_MESSAGE = "SEND_MESSAGE";
export const SIGN_IN_USER = "SIGN_IN_USER";
export const RECEIVED_USER = "RECEIVED_USER";
export const REMOVE_USER = "REMOVE_USER";
export const INITIALIZE_USERS = "INITIALIZE_USERS";
export const RECEIVED_MESSAGE = "RECEIVED_MESSAGE";

export function sendMessage(text) {
    return (dispatch, getState) => {
        var userName = getState().currentUser.get("name");
        firebaseRef.child("messages").push({ userName, text }).then(() => {
            dispatch({ type: SEND_MESSAGE, userName, text });
        });
    }
}

export function signInUser(name) {
    console.log(name);
    return dispatch => {
        let newUserRef = firebaseRef.child("users").push();
        newUserRef.push({ name }).then(() => {
            dispatch({
                type: SIGN_IN_USER,
                user: { id: newUserRef.key(), name }
            });
            // TODO handle disconnect
        });
    }
}

export function startListeningForUsers() {
    return dispatch => {
        let usersRef = firebaseRef.child("users");
        usersRef.once("value", snapshot => {
            dispatch({
               type: INITIALIZE_USERS,
               users: snapshot.val()
            });
        });
        usersRef.on("child_added", snapshot => {
            dispatch({
                type: RECEIVED_USER,
                user: snapshot.val()
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
               message: snapshot.val()
            });
        });
    }
}