import React from "react";
import { usersFilter } from "../../store";
import { observer } from "mobx-react-lite";

import User from "../user/user";
import Title from "../title/title";
import Pagination from "../pagination/pagination";

import "./board-users.scss";

const BoardUsers = observer(() => {
  const users = usersFilter.data;
  const usersTotal = usersFilter;

  return (
    <div className="wrapper">
      <Title>
        <div className="title__text">
          Пользователи
        </div>
      </Title>
      <div className="board">
        <div className="users-wrapper">
          {users.map(user => (
            <User
              name={user.username}
              user={user}
              users={users}
            />
          ))}
        </div>
        <Pagination
          item={usersTotal}
        />
      </div>
    </div>
  )
})

export default BoardUsers;