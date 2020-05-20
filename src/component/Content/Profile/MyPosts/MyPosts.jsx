import React from "react";
import myPosts from "./MyPosts.module.css";
import Posts from "./Post/Post";
import p from "./MyPosts.module.css"

const MyPosts = (props) => {

    let newPostValue = React.createRef();
    let onAddNewPost = () => {
        props.addNewPost();
    }
    let onAddNewText = () => {
        let text = newPostValue.current.value;
        props.addNewText(text)
    }

    let postItems = props.state.posts.map((item) => {
        return <Posts message={item.message} likeCounter={item.likeCounter}/>

    })
    return (
        <div className={p.myPosts}>
            My posts
            <div>
                <textarea ref={newPostValue} onChange={onAddNewText} value={props.state.newText}></textarea>
                <button onClick={onAddNewPost}>Add post</button>
            </div>
            {postItems}
        </div>
    );
};

export default MyPosts;
