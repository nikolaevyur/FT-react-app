import React, { useEffect, useState } from "react";
import { getComments } from "../../api";
import { tasks, users, comments } from "../../store";
import moment from "moment";

const Comment = (props) => {
  const formatDateOfCreation = moment(props.dateOfCreation).format('DD.MM.YYYY HH:mm');
  const author = props.user.find(u => u.id === props.userId);

  return (
  <div className="comment">
    <div className="column-title">{author.username}</div>
    <div className="column-title">{formatDateOfCreation}</div>
    <div>{props.text}</div>
  </div>)
  }
    

export default Comment;