import React from "react";
import typeTask from "../../assets/img/typeTask.svg";
import typeBug from "../../assets/img/typeBug.svg";

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