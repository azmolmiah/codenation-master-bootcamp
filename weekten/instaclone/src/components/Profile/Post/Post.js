import React from "react";

import Card from "./Card/Card";
import "./Post.scss";

const Posts = ({ posts, deletePost }) => {
  // console.log(posts[0].imageUrl);
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <Card post={post} deletePost={deletePost} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
