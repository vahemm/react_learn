import React from "react";
import myPosts from "./MyPosts.module.css";
import Posts from "./Post/Post";
import p from "./MyPosts.module.css"
import {addPost, addText} from "../../../../Redux/profileReducer";

const MyPosts = (props) => {

    let newPostValue = React.createRef();
    let addNewPost = () => {
        props.dispatch(addPost());
    }
    let addNewText = () => {

        let text = newPostValue.current.value;
        props.dispatch(addText(text))
    }

    let postItems = props.state.posts.map((item) => {
        return <Posts message={item.message} likeCounter={item.likeCounter}/>

    })
    return (
        <div className={p.myPosts}>
            My posts
            <div>
                <textarea ref={newPostValue} onChange={addNewText} value={props.state.newText}></textarea>
                <button onClick={addNewPost}>Add post</button>
            </div>
            {postItems}
        </div>
    );
};

export default MyPosts;
