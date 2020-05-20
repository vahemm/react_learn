import React from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItems/DialogItems";
import Message from "./Messages/Messages";

const Dialogs = (props) => {

    let messageItems = props.state.messages.map((item) => {
        return <Message message={item.message}/>
    })
    let dilogItems = props.state.items.map((item) => {
        return <DialogItem name={item.name} id={item.id}/>
    })
    let onUpdateText = (e) => {
        let text = e.target.value;
        props.updateText(text)

    }
    let onSendNewMessage = () => {
        props.sendNewMessage()
    }
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dilogItems}
            </div>
            <div className={d.messages}>
                <div>{messageItems}</div>
                <div>
                    <textarea onChange={onUpdateText} value={props.state.messageText}/>
                </div>
                <div>
                    <button onClick={onSendNewMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs