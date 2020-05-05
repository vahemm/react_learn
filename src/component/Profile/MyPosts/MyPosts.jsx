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
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
};

export default MyPosts;
