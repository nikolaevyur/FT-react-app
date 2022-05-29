import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser, getTasks, getTasksPag } from "../../api";
import Task from "../task/task";
import profile from "../../assets/images/profile.svg";
import "./board-profile.scss"
import Pagination from "../pagination/pagination";
import { tasksFilter } from '../../store';
import { observer } from "mobx-react-lite";
import Modal from "../modal/modal";
import Title from "../title/title";
import { AppRoute } from "../../const";

const BoardProfile = observer(() => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const tasksTotal = tasksFilter
  const tasks = tasksFilter.tasksData;

  const [modalActive, setModalActive] = useState(false);
  // const [filters, setFilters] = useState({
  //   query: '',
  //   assignedUsers: [],
  //   type: [],
  //   status: [],
  //   rank: [],
  // });

  // evt.preventDefault();
  // tasksFilter.preFilter = filters;
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
    tasksFilter.preFilter = filters;
    // tasksFilter.pagination.page = 0;
    tasksFilter.fetch();
  }, [])
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

  const loginUserData = JSON.parse(localStorage.getItem("loginUser"));

  return (
    <div className="wrapper">
      <Title>
        <div className="title__text">
          {user.data.username}
        </div>
        <div className="title__buttons">
          <Link to={AppRoute.ADD} ><button className="btn btn-default">Добавить задачу</button></Link>
          {loginUserData.id === id && <button className="btn btn-primary" onClick={() => setModalActive(true)}>Редактировать</button>}
        </div>
      </Title>
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
              <div className="profile__about-text">{user.data.about}</div>
            </div>
          </div>
          <div className="profile__info-right">
          <div className="profile__title">Задачи</div>
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
                task={task} />
            ))}
            </div>
            <Pagination item={tasksTotal} />
          </div>
        </div>
        <Modal
          active={modalActive}
          setActive={setModalActive}
          user={user.data}
          loginUser={loginUserData} />
      </div>
    </div>
  )
})

export default BoardProfile;