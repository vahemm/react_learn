import React from "react";
import myPosts from "./MyPosts.module.css";
import Posts from "./Post/Post";
import p from "./MyPosts.module.css"

const MyPosts = (props) => {
    let newPostValue = React.createRef();
    let addPost = () => {

        props.addPost();


    }
    let addNewText = () => {
        let text = newPostValue.current.value;
        props.addText(text)
    }

    let postItems = props.posts.map((item) => {
        return <Posts message={item.message} likeCounter={item.likeCounter}/>

    })
    return (
        <div className={p.myPosts}>
            My posts
            <div>
                <textarea ref={newPostValue} onChange={addNewText} value={props.newText}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {postItems}
        </div>
    );
};

export default MyPosts;
