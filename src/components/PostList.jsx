import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentsList from "./CommentsList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPots = async () => {
    const { data } = await axios.get("http://localhost:4000/posts");

    setPosts(data);
  };
  useEffect(() => {
    fetchPots();
  }, []);

  const renderPost = Object.values(posts).map((posts) => {
    return (
      <div
        key={posts.id}
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
      >
        <div className="card-body">
          <h3>{posts.title}</h3>
          <hr />
          <CommentsList postId={posts.id} />
          <CommentCreate postId={posts.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderPost}
    </div>
  );
};

export default PostList;
