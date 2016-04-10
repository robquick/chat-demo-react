export const SEND_MESSAGE = "SEND_MESSAGE";

export function sendMessage(text) {
    console.log(text);
    return {
        type: SEND_MESSAGE,
        text
    };
}