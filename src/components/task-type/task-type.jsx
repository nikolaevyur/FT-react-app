import React from "react";
import typeTask from "../../assets/images/typeTask.svg";
import typeBug from "../../assets/images/typeBug.svg";
import "./task-type.scss"

const Type = (props) => {
  return (
    <div className="task__type">
    {props.type === 'bug' ?
      (<div><img src={typeBug} alt="Task" /></div>) :
      (<div><img src={typeTask} alt="Task" /></div>)
    }</div>
  )
}

export default Type;