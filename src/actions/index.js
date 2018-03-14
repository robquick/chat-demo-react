import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJ_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

const firebaseRef = firebase.database().ref();

export const SEND_MESSAGE = "SEND_MESSAGE";
export const SIGN_IN_USER = "SIGN_IN_USER";
export const RECEIVED_USER = "RECEIVED_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVED_MESSAGE = "RECEIVED_MESSAGE";

export function sendMessage(text) {
    return (dispatch, getState) => {
        const userName = getState().currentUser.get("name");
        firebaseRef
            .child("messages")
            .push({ userName, text })
            .then(() => {
                dispatch({ type: SEND_MESSAGE, userName, text });
            });
    };
}

export function signInUser(name) {
    return dispatch => {
        const newUserRef = firebaseRef.child("users").push();
        newUserRef.set({ name }).then(() => {
            dispatch({
                type: SIGN_IN_USER,
                user: { id: newUserRef.key, name }
            });
            newUserRef.onDisconnect().remove();
        });
    };
}

export function startListeningForUsers() {
    return dispatch => {
        const usersRef = firebaseRef.child("users");
        usersRef.on("child_added", snapshot => {
            dispatch({
                type: RECEIVED_USER,
                user: { ...snapshot.val(), id: snapshot.key }
            });
        });
        usersRef.on("child_removed", snapshot => {
            dispatch({
                type: REMOVE_USER,
                id: snapshot.val().id
            });
        });
    };
}

export function startListeningForMessages() {
    return dispatch => {
        firebaseRef.child("messages").on("child_added", snapshot => {
            dispatch({
                type: RECEIVED_MESSAGE,
                message: { ...snapshot.val(), id: snapshot.key }
            });
        });
    };
}
