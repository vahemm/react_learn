export const addMessageText = (messageText) => {
    return {type: "addMessageText", addedMessageText: messageText}
};
export const sendMessage = () => {
    return {type: "sendMessage"}
};

let initialState = {
    items: [
        {id: "1", name: "Vahe"},
        {id: "2", name: "Karen"},
        {id: "3", name: "Anahit"},
        {id: "4", name: "Grigor"},
        {id: "5", name: "Hunan"}
    ],
    messages: [
        {id: "1", message: "Hi"},
        {id: "2", message: "Bye"},
        {id: "3", message: "Good"},
        {id: "4", message: "Bad"},
        {id: "5", message: "Go"}
    ],
    messageText: ""
}

const dispatchMessage = (state = initialState, action) => {
    switch (action.type) {
        case "addMessageText":
            state.messageText = action.addedMessageText;
            return state;
        case "sendMessage":
            let newMessage = {
                id: `${state.messages.length + 1}`,
                message: state.messageText
            }
            state.messages.push(newMessage);
            state.messageText = "";
            return state
        default:
            return state;
    }
}
export default dispatchMessage;