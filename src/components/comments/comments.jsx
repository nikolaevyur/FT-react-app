import React, { useEffect, useState } from "react";
import { getComments } from "../../api";
import { tasks, users, comments } from "../../store";

const Comments = (props) => {
  
  const [comment, setComment] = useState(null);

  useEffect(() => {
    getComments(props.id).then(u => setComment(u));
  }, [props.id]);

  if (comment === null) {
      return <p>Loading...</p>
    }

  return (
  <div className="comments">
    {comment.map(c => (
      <div>
        <div>{c.userId}</div>
        <div>{c.text}</div>
      </div>
  ))}
  </div>)
  }
    

export default Comments;