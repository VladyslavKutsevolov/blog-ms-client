import React, { useEffect, useState } from "react";
import axios from "axios";

function CommentsList({ postId }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const { data } = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return (
    <div>
      <ul>{renderComments}</ul>
    </div>
  );
}

export default CommentsList;
