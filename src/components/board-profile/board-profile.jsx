import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, getTasks, getTasksPag } from "../../api";
import Task from "../task/task";
import profile from "../../assets/images/profile.svg";
import "./board-profile.scss"
import Pagination from "../pagination/pagination";
import { tasksFilter } from '../../store';
import { observer } from "mobx-react-lite";

const BoardProfile = observer(() => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const tasksTotal = tasksFilter
  const tasks = tasksFilter.filtredData;
  // const [filters, setFilters] = useState({
  //   query: '',
  //   assignedUsers: [],
  //   type: [],
  //   status: [],
  //   rank: [],
  // });

  // evt.preventDefault();
  // tasksFilter.preFiltredData = filters;
  // tasksFilter.pagination.page = 0;
  // tasksFilter.fetch();
  // console.log(tasksFilter.data)

  const filters = {
      query: '',
      assignedUsers: [id],
      userIds: [],
      type: [],
      status: [],
      rank: []
    }
  useEffect(() => {
    tasksFilter.preFiltredData = filters;
    // tasksFilter.pagination.page = 0;
    tasksFilter.fetch();
		})
  // const [tasks, setTasks] = useState(null);

  useEffect(() => {
    getUser(id).then(u => setUser(u));
  }, [id]);

  // useEffect(() => {
  //     getTasks().then(t => setTasks(t));
  //   }, []);


  if (user === null) {
    return <p>Loading...</p>
  }
  // if (tasks === null) {
  //   return <p>Loading...</p>
  // }
  // console.log(tasks)

  const filterTasksByUser = tasks.filter(x => x.assignedId === id);
  console.log(filterTasksByUser)

  return (
    <div className="board">
      <div className="profile">
        <div className="profile__info">
            <img 
            src={user.data.photoUrl === null ? profile : user.data.photoUrl} 
            alt="Фото"
            className="profile__photo" 
            />
          <div className="profile__about">
            <p className="profile__title">О себе</p>
            {user.data.about}
          </div>
        </div>
        <div className="profile__tasks">
        {filterTasksByUser.length === 0 && <p className="profile__no-tasks">Задач нет!</p>}
        {filterTasksByUser.map(task => (          
        <Task
          key={task.id}
          title={task.title}
          type={task.type}
          status={task.status}
          rank={task.rank}
          assignedId={task.assignedId}
          id={task.id}
          user={user.data}
          task={task}/>
        ))}
        </div>
      </div>
      <Pagination item={tasksTotal} />
    </div>
  )
})

export default BoardProfile;