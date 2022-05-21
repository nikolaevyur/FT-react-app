import React, {useState, useEffect} from "react";
import TaskBurger from "../task-burger/task-burger";
import Priority from "../task-priority/task-priority";
import Status from "../task-status/task-status";
import Type from "../task-type/task-type";
import "./task.scss";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { getUsers } from "../../api";

const Task = (props) => {
  const { id } = props.task;
  const user = window.location.pathname === AppRoute.MAIN && props.user.find(u => u.id === props.assignedId)

  return (
    <div className="task">
      <Type type={props.type}/>
      <div className="task__name">
        <Link to={`${AppRoute.TASK}/${id}`}>{props.title}</Link>
        </div>
        {window.location.pathname === AppRoute.MAIN &&
        <div className="task__user">{user === undefined ? "Loading..." : user.username}</div>}
      <Status status={props.status}/>
      <Priority  rank={props.rank}/>
      <TaskBurger />
    </div>
  )
}

export default Task;