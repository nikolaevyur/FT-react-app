import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, getTasks } from "../../api";
import Task from "../task/task";
import profile from "../../assets/images/profile.svg";
import "./board-profile.scss"

const BoardProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    getUser(id).then(u => setUser(u));
  }, [id]);

  useEffect(() => {
      getTasks().then(t => setTasks(t));
    }, []);

  if (user === null) {
    return <p>Loading...</p>
  }

  if (tasks === null) {
    return <p>Loading...</p>
  }

  const filterTasksByUser = tasks.data.data.filter(x => x.assignedId === id);

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
      {/* Number of pages */}
    </div>
  )
}
export default BoardProfile;