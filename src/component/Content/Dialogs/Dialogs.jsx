import React from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItems/DialogItems";
import Message from "./Messages/Messages";
import {addMessageText, sendMessage} from "../../../Redux/gialogsReducer";


const Dialogs = (props) => {

    let messageItems = props.state.messages.map((item) => {
        return <Message message={item.message}/>
    })
    let dilogItems = props.state.items.map((item) => {
        return <DialogItem name={item.name} id={item.id}/>
    })
    let updateText = (e) => {
        let text = e.target.value;
        props.dispatch(addMessageText(text))

    }
    let sendNewMessage = () => {
        props.dispatch(sendMessage())
    }
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dilogItems}
            </div>
            <div className={d.messages}>
                <div>{messageItems}</div>
                <div>
                    <textarea onChange={updateText} value={props.state.messageText}/>
                </div>
                <div>
                    <button onClick={sendNewMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs