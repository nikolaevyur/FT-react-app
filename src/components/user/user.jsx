import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

import "./user.scss"

const User = (props) => {
  const { id } = props.user;

  return (
    <div className="user">
      <Link to={`${AppRoute.PROFILE}/${id}`}><div className="user__name">{props.name}</div></Link>
    </div>
  )
}

export default User;