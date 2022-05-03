import React from "react";
import Type from "../type/type";
import "./task.scss"

const Task = (props) => {
  return (
      <div className="task">
        <Type type={props.type}/>
        <div className="task__name">{props.name}</div>
        <div className="task__user">{props.user}</div>
        <div className="task__status"></div>
        <div className="task__priority"></div>
        <div className="task__burger"></div>
    </div>
  )
}

export default Task;