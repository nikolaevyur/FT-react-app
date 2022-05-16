import React from "react";
import InfoTask from "../info-task/info-task";
import { users } from "../../store";

const FormBoard = ({users}) => {
  return (
    <div className="board">
      <InfoTask user={users} />
    </div>
  )
}

export default FormBoard;