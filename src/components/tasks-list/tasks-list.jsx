import React from "react";
import Priority from "../task-priority/task-priority";
import Status from "../task-status/task-status";
import Type from "../task-type/task-type";
import "./tasks-list.scss"

const TasksList = (props) => {
  return (
      <div className="task">
        <Type type={props.type}/>
        <div className="task__name">{props.name}</div>
        <div className="task__user">{props.user}</div>
        <Status status={props.status}/>
        <Priority priority={props.priority}/>
        <div className="task__burger"></div>
    </div>
  )
}

export default TasksList;