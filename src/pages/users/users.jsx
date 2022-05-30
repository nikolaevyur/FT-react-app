import React from "react";
import { observer } from "mobx-react-lite";

import BoardUsers from "../../components/board-users/board-users";
import Header from "../../components/header/header";

const Users = observer (({users}) => {
  return (
    <>
      <Header />
      <BoardUsers users={users} />
    </>
  )
})

export default Users;