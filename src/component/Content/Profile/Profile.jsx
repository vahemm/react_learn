import React from "react";
import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Discription from "./Discription/Discription";


const Profile = () => {
    return (
        <div className={p.contenier}>
            <Discription/>
            <MyPosts/>

        </div>
    );
};

export default Profile;
