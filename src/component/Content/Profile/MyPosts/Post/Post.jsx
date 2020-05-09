import React from "react";
import post from "./Post.module.css";

const Posts = (props) => {
  return (
    <div className={post.item}>
      <img src="https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg" />
      {props.message}
      <div>
        <span>like</span> {props.likeCounter} 
      </div>
    </div>
  );
};

export default Posts;
