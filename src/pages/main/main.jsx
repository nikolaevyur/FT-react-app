import React from "react";
import { observer } from "mobx-react-lite";

import BoardTasks from "../../components/board-tasks/board-tasks";
import Header from "../../components/header/header";

const Main = observer(({tasks}) => {
  return (
    <>
      <Header />
      <BoardTasks tasks={tasks}/>
    </>
  )
})

export default Main;