import React from "react";
import BoardEdit from "../../components/board-edit/board-edit";
import Header from "../../components/header/header";

const TaskEdit = ({tasks}) => {
  return (
    <>
      <Header />
      <BoardEdit tasks={tasks}/>
    </>
  )
}

export default TaskEdit;