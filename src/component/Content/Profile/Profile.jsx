import React from "react";
import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Discription from "./Discription/Discription";


const Profile = (props) => {
    return (
        <div className={p.contenier}>
            <Discription/>
            <MyPosts posts={props.posts} addPost={props.addPost} addText={props.addText} newText={props.newText}/>
        </div>
    );
};

export default Profile;

