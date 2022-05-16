import React from "react";
import FormBoard from "../../components/form-board/form-board";
import Header from "../../components/header/header";

const TaskForm = ({users}) => {
  return (
    <>
      <Header />
      <FormBoard users={users}/>
    </>
  )
}

export default TaskForm;