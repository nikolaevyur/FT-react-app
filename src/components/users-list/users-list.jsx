import React from "react";
import "./users-list.scss"

const UsersList = (props) => {
  return (
    <div className="user">
        <div className="user__name">{props.user}</div>
    </div>
  )
}

export default UsersList;