import React from "react";

function CommentsList({ comments }) {
  const renderComments = comments.map((comment) => {
    let content;
    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "comment pending";
    }

    if (comment.status === "rejected") {
      content = "comment rejected";
    }

    return <li key={comment.id}>{content}</li>;
  });
  return (
    <div>
      <ul>{renderComments}</ul>
    </div>
  );
}

export default CommentsList;
