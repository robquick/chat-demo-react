export const SEND_MESSAGE = "SEND_MESSAGE";
export const LOGIN_USER = "LOGIN_USER";

export function sendMessage(text) {
    console.log(text);
    return {
        type: SEND_MESSAGE,
        text
    };
}

export function loginUser(name) {
    console.log(name);
    return {
        type: LOGIN_USER,
        name
    }
}