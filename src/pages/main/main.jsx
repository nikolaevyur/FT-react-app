import React from "react";
import BoardTasks from "../../components/board-tasks/board-tasks";
import Header from "../../components/header/header";
import { observer } from "mobx-react-lite";

const Main = observer(({tasks}) => {
  return (
    <>
      <Header />
      <BoardTasks tasks={tasks}/>
    </>
  )
})

export default Main;