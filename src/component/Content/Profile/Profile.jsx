import React from "react";
import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Discription from "./Discription/Discription";
import MyPostsContenier from "./MyPosts/MyPostsContenier";


const Profile = (props) => {

    return (
        <div className={p.contenier}>
            <Discription/>
            <MyPostsContenier/>
        </div>
    );
};

export default Profile;

