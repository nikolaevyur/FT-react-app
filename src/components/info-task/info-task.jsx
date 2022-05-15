import React, { useEffect } from "react";
import "./info-task.scss";
import { tasks, users, comments } from "../../store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getTask } from "../../api";
import { rank } from "../../const";
import moment from "moment";
import Comments from "../comments/comments";

const InfoTask = observer(() => {
  const { id } = useParams();

  const [task, setTask] = useState(null);

  useEffect(() => {
    getTask(id).then(u => setTask(u));
  }, [id]);

  console.log(task)
  if (task === null) {
      return <p>Loading...</p>
    }

  const formatDateOfCreation = moment(task.dateOfCreation).format('DD.MM.YYYY HH:mm');
  const formatDateOfUpdate = moment(task.dateOfUpdate).format('DD.MM.YYYY HH:mm');

  const timeInMinutes = task.timeInMinutes;
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = Math.floor(timeInMinutes) - (hours * 60);

  return (
    <div className="info">
      <div className="first-column">
        <div className="first-column__info-task">
          <p className="column-title">Исполнитель</p>
          {task.assignedId}
        </div>
        <div className="first-column__info-task">
          <p className="column-title">Автор задачи</p>
          {task.userId}
        </div>
        <div className="first-column__info-task">
          <p className="column-title">Тип запроса</p>
          {task.type === "bug" ? "Ошибка" : "Задача"}
        </div>
        <div className="first-column__info-task">
          <p className="column-title">Приоритет</p>
          {rank[task.rank]}
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
        <button>Сделать запись о работе</button>
      </div>
      <div className="second-column">
        <div className="second-column__description">
          <p className="column-title">Описание</p>
          {task.description}
        </div>
      </div>
      <div className="third-column">
        <Comments id={id}/>
      </div>
    </div>
  )
})

export default InfoTask;