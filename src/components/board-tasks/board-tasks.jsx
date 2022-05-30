import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import { observer } from "mobx-react-lite";
import { getUsers } from "../../api";
import { tasksFilter } from "../../store";

import Task from "../task/task";
import Filters from "../filters/filters"
import Pagination from "../pagination/pagination";
import Title from "../title/title";

import "./board-tasks.scss";
import "../../assets/styles/_buttons.scss"

const BoardTasks = observer(() => {
  const [users, setUsers] = useState(null);
  const tasks = tasksFilter.tasksData;
  const tasksTotal = tasksFilter

  useEffect(() => {
    getUsers().then(u => setUsers(u));
  }, []);

  const filters = {assignedUsers: []}
  
  useEffect(() => {
    tasksFilter.preFilter = filters;
    tasksFilter.fetch();
  }, [])

  if (!tasks) return null;
  if (!users) return null;

  return (
    <div className="wrapper">
      <Title>
        <div className="title__text">
          Задачи
        </div>
        <div className="title__buttons">
          <Link to={AppRoute.ADD} ><button className="btn btn-primary">Добавить задачу</button></Link>
        </div>
      </Title>
      <div className="board">
        <Filters users={users.data.data} />

        <div className="task-wrapper">
          {tasks.length === 0 && <p>Задач нет!</p>}
          {tasks.map(task => (
            <Task
              key={task.id}
              title={task.title}
              type={task.type}
              status={task.status}
              rank={task.rank}
              assignedId={task.assignedId}
              id={task.id}
              user={users.data.data}
              task={task} />
          ))}

        </div>
        <Pagination
          item={tasksTotal}
          total={tasksTotal.total}
          limit={tasksTotal.limit}
          page={tasksTotal.page}
        />
      </div>
    </div>
  )
})

export default BoardTasks;