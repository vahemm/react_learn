import React from "react";
import myPosts from "./MyPosts.module.css";
import Posts from "./Post/Post";
import p from "./MyPosts.module.css"

const MyPosts = () => {
    let posts = [
        {id: "1", message: "How are you", likeCounter: "12"},
        {id: "1", message: "Let's go", likeCounter: "45"},
        {id: "1", message: "Go", likeCounter: "32"},
        {id: "1", message: "First post", likeCounter: "15"}

    ];
    let postItems = posts.map((item) => {
        return <Posts message={item.message} likeCounter={item.likeCounter}/>

    })
    return (
        <div className={p.myPosts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {postItems}
        </div>
    );
};

export default MyPosts;
