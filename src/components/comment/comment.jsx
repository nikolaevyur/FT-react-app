import React, { useEffect, useState } from "react";
import { getComments } from "../../api";
import { tasks, users, comments } from "../../store";

const Comment = (props) => {
  
  // const [comment, setComment] = useState(null);

  // useEffect(() => {
  //   getComments(props.id).then(u => setComment(u));
  // }, [props.id]);

  // if (comment === null) {
  //     return <p>Loading...</p>
  //   }
  const author = props.user.find(u => u.id === props.userId);

  return (
  <div className="comment">
    <div className="column-title">{author.username}</div>
    <div>{props.text}</div>
  </div>)
  }
    

export default Comment;