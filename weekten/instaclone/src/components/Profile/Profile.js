import React, { useEffect, useState } from "react";

import { getUserPosts, deletePost } from "../../utils";
import Nav from "../Nav/Nav";
import Posts from "./Post/Post";

const Profile = ({ username }) => {
  const [posts, setPosts] = useState([]);

  // console.log(posts[0]);

  useEffect(() => {
    const fetchData = async () => {
      await getUserPosts(username, setPosts);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      <div className="container w-75 mt-5">
        <div className="row">
          <div className="col-6">
            <Posts posts={posts} deletePost={deletePost} />
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
