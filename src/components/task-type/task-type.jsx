import React from "react";
import typeTask from "../../assets/images/typeTask.svg";
import typeBug from "../../assets/images/typeBug.svg";
import "./task-type.scss"

const Type = (props) => {
  return (
    <div className="task__type">
    {props.type === 'bug' ?
      (<img src={typeBug} alt="Bug" />) :
      (<img src={typeTask} alt="Task" />)
    }</div>
  )
}

export default Type;