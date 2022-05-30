import React from "react";
import { observer } from "mobx-react-lite";
import BoardEdit from "../../components/board-edit/board-edit";
import Header from "../../components/header/header";

const TaskEdit = observer(({tasks}) => {
  return (
    <>
      <Header />
      <BoardEdit tasks={tasks}/>
    </>
  )
})

export default TaskEdit;