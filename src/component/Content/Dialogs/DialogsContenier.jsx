import React from "react";
import {addMessageText, sendMessage} from "../../../Redux/gialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";


const DialogsCont = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let updateText = (text) => {
                        store.dispatch(addMessageText(text))
                    }
                    let sendNewMessage = () => {
                        store.dispatch(sendMessage())
                    }
                    return (
                        <Dialogs state={store.getState().dialogPage} updateText={updateText} sendNewMessage={sendNewMessage}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

const mapStateToProps = (state)=>{
    return {
        state:state.dialogPage
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        updateText: (text)=>{
            dispatch(addMessageText(text))
        },
        sendNewMessage: ()=>{
            dispatch(sendMessage())
        }
    }
}

const  DialogsContenier = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContenier;