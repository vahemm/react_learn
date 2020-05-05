import React from "react";
import p from "./Profile.module.css";


const Profile = () => {
  return (
    <div className={p.contenier}>
      <div className={p.background}></div>
      <div>
        <div> New post</div>
        <div>My posts</div>
        <div className="item">Old post</div>
      </div>
    </div>
  );
};

export default Profile;
