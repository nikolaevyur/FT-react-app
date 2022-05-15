import React from "react";
import InfoTask from "../info-task/info-task";

const FormBoard = ({id}) => {
  return (
    <div className="board">
      <InfoTask id={id} />
    </div>
  )
}

export default FormBoard;