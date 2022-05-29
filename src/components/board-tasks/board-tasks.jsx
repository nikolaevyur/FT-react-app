import React, {useState, useEffect} from "react";
import Task from "../task/task";
import Filters from "../filters/filters"
import { observer } from "mobx-react-lite";
import { getTasks, getTasksPag, getUsers } from "../../api";
import { tasksFilter } from '../../store';
import Pagination from "../pagination/pagination";
import Title from "../title/title";

import "./board-tasks.scss";
import "../../assets/styles/_buttons.scss"
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

const BoardTasks = observer(() => {
  const [users, setUsers] = useState(null);
  const tasks = tasksFilter.tasksData;
  const tasksTotal = tasksFilter


  // console.log(tasks)

  // useEffect(() => {
  //   const page = 1
  //   const filters = {}
  //   getTasksPag(filters, page).then(t => setTasks(t));
  // }, []);

      // тут все работало
  // useEffect(() => {
  //   getTasks().then(t => setTasks(t));
  // }, []);

  useEffect(() => {
    getUsers().then(u => setUsers(u));
  }, []);

  const filters = {
  
    assignedUsers: [],

  }
useEffect(() => {
  tasksFilter.preFilter = filters;
  tasksFilter.fetch();
  },[])
  // if (tasks === null) {
  //   return <p>Loading...</p>
  // }

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
          task={task}/>
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