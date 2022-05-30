import React from "react";
import moment from "moment";
import { deleteComment } from "../../api";

import "./comment.scss"

const Comment = (props) => {
  const formatDateOfCreation = moment(props.dateOfCreation).format("DD.MM.YYYY HH:mm");
  const author = props.user.find(u => u.id === props.userId);
  const userData = JSON.parse(localStorage.getItem("loginUser"))

  const handleDelete = (evt) => {
    evt.preventDefault();
    deleteComment(props.id)
      .then(() => window.location.reload())
  }

  return (
    <div className="comment">
      <div className="columns">
        <div className="column__left">
          <p className="column__title">{author.username}</p>
          <p className="column__title">({formatDateOfCreation})</p>
        </div>
        <div className="column__right">
          {userData.id === author.id && <button onClick={handleDelete} className="column__btn">Удалить</button>}
        </div>
      </div>
      <div>{props.text}</div>
    </div>)
}


export default Comment;