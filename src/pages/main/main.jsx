import React from "react";
import BoardTasks from "../../components/board-tasks/board-tasks";
import Header from "../../components/header/header";
import { observer } from "mobx-react-lite";

const Main = observer(({ tasks,users }) => {
  return (
    <>
      <Header />
      <BoardTasks 
        tasks={tasks}
        users={users}/>
    </>
  )
})

export default Main;