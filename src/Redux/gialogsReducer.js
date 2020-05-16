export const addMessageText = (messageText) => {
    return {type: "addMessageText", addedMessageText: messageText}
};
export const sendMessage = () => {
    return {type: "sendMessage"}
};

const  pispatchMessage = (action, state)=>{
    if (action.type === "addMessageText") {
        state.messageText = action.addedMessageText;
    } else if (action.type === "sendMessage") {
        let newMessage = {
            id: `${state.messages.length + 1}`,
            message: state.messageText
        }
        state.messages.push(newMessage);
        state.messageText = "";
    }
}
export default pispatchMessage;