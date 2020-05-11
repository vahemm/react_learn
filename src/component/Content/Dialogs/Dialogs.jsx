import React from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItems/DialogItems";
import Message from "./Messages/Messages";



const Dialogs = (props) => {

    let messageItems = props.messages.map((item)=>{
        return <Message message={item.message}/>
    })
    let dilogItems = props.items.map( (item)=>{
        return <DialogItem name={item.name} id={item.id}/>
    })
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dilogItems}
            </div>
            <div className={d.messages}>
                {messageItems}
            </div>
        </div>
    )
}

export default Dialogs