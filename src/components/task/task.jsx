import React from "react";
import TaskBurger from "../task-burger/task-burger";
import Priority from "../task-priority/task-priority";
import Status from "../task-status/task-status";
import Type from "../task-type/task-type";
import "./task.scss";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

const Task = observer( (props) => {
  const { id } = props.task;
  console.log(id)
  let user = props.user.find(item => item.id === props.assignedId);

  console.log(user)

  return (
    <div className="task">
      <Type type={props.type}/>
      <div className="task__name">
        <Link to={`${AppRoute.TASK}/${id}`}>{props.title}</Link>
        </div>
      {/* <div className="task__user">{user.data.username}</div> */}
      <Status status={props.status}/>
      <Priority  rank={props.rank}/>
      <TaskBurger />
    </div>
  )
})

export default Task;