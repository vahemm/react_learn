import React from "react";
import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Discription from "./Discription/Discription";


const Profile = (props) => {

    return (
        <div className={p.contenier}>
            <Discription/>
            <MyPosts state={props.state} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;

