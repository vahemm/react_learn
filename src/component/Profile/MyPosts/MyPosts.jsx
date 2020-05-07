import React from "react";
import myPosts from "./MyPosts.module.css";
import Posts from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Posts message = "Իսկ ի՞նչ նորություններ կան" likeCounter="12"/>
      <Posts message = "Ամեն ինչ դեռ առջևում է" likeCounter="6"/>
      <Posts message = "Սա առաջին փոստն է" likeCounter="14"/>
    </div>
  );
};

export default MyPosts;
