import React from "react";
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItems/DialogItems";
import Message from "./Messages/Messages";

let items = [
    {id:"1", name:"Vahe"},
    {id:"2", name:"Karen"},
    {id:"3", name:"Anahit"},
    {id:"4", name:"Grigor"},
    {id:"5", name:"Hunan"}
]
let messages = [
    {id:"1",message:"Hi"},
    {id:"2",message:"Bye"},
    {id:"3",message:"Good"},
    {id:"4",message:"Bad"},
    {id:"5",message:"Go"}

]
let dilogItems = items.map( (item)=>{
    return <DialogItem name={item.name} id={item.id}/>
})
let messageItems = messages.map((item)=>{
    return <Message message={item.message}/>
})
const Dialogs = (props) => {
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