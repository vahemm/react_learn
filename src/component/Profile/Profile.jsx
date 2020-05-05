import React from "react";
import p from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
  return (
    <div className={p.contenier}>
      <div className={p.background}></div>
      <MyPosts />
      
    </div>
  );
};

export default Profile;
