import React from "react";
import BoardUsers from "../../components/board-users/board-users";
import Header from "../../components/header/header";

const Users = ({tasks, users}) => {
  return (
    <>
      <Header />
      <BoardUsers   tasks={tasks} users={users} />
    </>
  )
}

export default Users;