import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTask } from "../../api";
import { getComments } from "../../api";
import { AppRoute, rank } from "../../const";
import { tasksFilter } from "../../store";
import moment from "moment";

import Comment from "../comment/comment";
import CommentAdd from "../comment-add/comment-add";
import ModalTime from "../modal-time/modal-time";
import Title from "../title/title";
import Status from "../task-status/task-status";

import "./info-task.scss";


const InfoTask = (props) => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [comment, setComment] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    getTask(id).then(t => setTask(t));
  }, [id]);

  useEffect(() => {
    getComments(id).then(u => setComment(u));
  }, [id]);

  if (task === null) {
    return <p>Loading...</p>
  }

  // USERNAME
  const assignedUser = props.user.find(u => u.id === task.data.assignedId),
    author = props.user.find(u => u.id === task.data.userId);
  const loginUserData = JSON.parse(localStorage.getItem("loginUser"));

  // TIME
  const formatDateOfCreation = moment(task.data.dateOfCreation).format("DD.MM.YYYY HH:mm"),
    formatDateOfUpdate = moment(task.data.dateOfUpdate).format("DD.MM.YYYY HH:mm");

  const timeInMinutes = task.data.timeInMinutes,
    hours = Math.floor(timeInMinutes / 60),
    minutes = Math.floor(timeInMinutes) - (hours * 60);

  const changeStatus = (evt) => {
    evt.preventDefault();
    let newStatus = evt.target.value;
    tasksFilter.changeTaskStatus(id, newStatus)
      .then(() => window.location.reload())
  }

  const handleDelete = (evt) => {
    evt.preventDefault();
    tasksFilter.deleteTask(id)
      .then(() => window.location.reload())
  }
  return (
    <div className="wrapper">
      <Title>
        <div className="title__text">
          {task.data.title}
          <Status status={task.data.status} />
        </div>
        <div className="title__buttons">
          {task.data.status === "opened" &&
            <button
              className="btn btn-default"
              onClick={changeStatus}
              value={"inProgress"}
            >
              Взять в работу
            </button>
          }
          <Link to={`${AppRoute.ADD}/${id}`} ><button className="btn btn-primary">Редактировать</button></Link>
          <button
            onClick={handleDelete}
            className="btn btn-error">
            Удалить
          </button>
        </div>
      </Title>
      <div className="board">
        <div className="info">
          <div className="first-column">
            <div className="first-column__info-task">
              <p className="column-title">Исполнитель</p>
              {assignedUser === undefined ? "Loading..." : assignedUser.username}
            </div>
            <div className="first-column__info-task">
              <p className="column-title">Автор задачи</p>
              {author === undefined ? "Loading..." : author.username}
            </div>
            <div className="first-column__info-task">
              <p className="column-title">Тип запроса</p>
              {task.type === "bug" ? "Ошибка" : "Задача"}
            </div>
            <div className="first-column__info-task">
              <p className="column-title">Приоритет</p>
              {rank[task.data.rank]}
            </div>
            <div className="first-column__info-task">
              <p className="column-title">Дата создания</p>
              {formatDateOfCreation}
            </div>
            <div className="first-column__info-task">
              <p className="column-title">Дата изменения</p>
              {formatDateOfUpdate}
            </div>
            <div className="first-column__info-task">
              <p className="column-title">Затрачено времени</p>
              {hours} часов {minutes} минут
            </div>
            <button className="btn btn-primary" onClick={() => setModalActive(true)}>Сделать запись о работе</button>
            <ModalTime
              active={modalActive}
              setActive={setModalActive}
              loginUser={loginUserData}
              id={id}
            />
          </div>
          <div className="second-column">
            <div className="second-column__description">
              <p className="column-title">Описание</p>
              {task.data.description}
            </div>
          </div>
          <div className="third-column">
            {comment === null ?
              <p className="column-title">{`Комментарии (...)`}</p> :
              <p className="column-title">{`Комментарии (${comment.data.length})`}</p>}
            <CommentAdd taskId={task.data.id} />
            {comment === null ? "Loading..." :
              comment.data.map(c => (
                <Comment
                  key={c.id}
                  text={c.text}
                  user={props.user}
                  userId={c.userId}
                  dateOfCreation={c.dateOfCreation}
                  id={c.id}
                />
              )
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoTask;