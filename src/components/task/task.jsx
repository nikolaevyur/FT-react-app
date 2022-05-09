import React from "react";
import TaskBurger from "../task-burger/task-burger";
import Priority from "../task-priority/task-priority";
import Status from "../task-status/task-status";
import Type from "../task-type/task-type";
import "./task.scss"

const Task = (props) => {
  return (
    <div className="task">
      <Type type={props.type} />
      <div className="task__name">{props.name}</div>
      <div className="task__user">{props.user}</div>
      <Status status={props.status} />
      <Priority priority={props.priority} />
      <TaskBurger />
    </div>
  )
}

export default Task;