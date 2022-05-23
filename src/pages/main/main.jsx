import React from "react";
import BoardTasks from "../../components/board-tasks/board-tasks";
import Header from "../../components/header/header";
import { observer } from "mobx-react-lite";

const Main = observer(({ login }) => {
  console.log(login)
  return (
    <>
      <Header login={login} />
      <BoardTasks />
    </>
  )
})

export default Main;