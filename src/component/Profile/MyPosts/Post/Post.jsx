import React from "react";
import post from "./Post.module.css";

const Posts = () => {
  return (
    <div className={post.item}>
      <img src="https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg" />
      Post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Posts;
