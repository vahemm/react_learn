import React from "react";
import {addPost, addText} from "../../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../StoreContext";
import {connect} from "react-redux";

const MyPostsCont = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addNewPost = () => {
                        store.dispatch(addPost());
                    }
                    let addNewText = (text) => {
                        store.dispatch(addText(text))
                    }

                    return (
                        <MyPosts addNewPost={addNewPost}
                                 addNewText={addNewText}
                                 state={store.getState().profilePage}/>
                    );
                }
            }
        </StoreContext.Consumer>
    )

};
const mapStateToProps = (state)=>{
    return {
        state:state.profilePage
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addNewPost: ()=> dispatch(addPost()),
        addNewText: (text)=> dispatch(addText(text))
    }
};
const MyPostsContenier = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContenier;
