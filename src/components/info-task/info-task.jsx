import React, { useEffect, useState } from "react";
import "./info-task.scss";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { getTask, addComment } from "../../api";
import { getComments } from "../../api";
import { rank } from "../../const";
import moment from "moment";
import Comment from "../comment/comment";
import { tasks, users, comments } from "../../store";
import CommentAdd from "../comment-add/comment-add";

const InfoTask = observer((props) => {
  const { id } = useParams();

  const [task, setTask] = useState(null);
  const [comment, setComment] = useState(null);

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

  // TIME
  const formatDateOfCreation = moment(task.data.dateOfCreation).format('DD.MM.YYYY HH:mm'),
        formatDateOfUpdate = moment(task.data.dateOfUpdate).format('DD.MM.YYYY HH:mm');

  const timeInMinutes = task.data.timeInMinutes,
        hours = Math.floor(timeInMinutes / 60),
        minutes = Math.floor(timeInMinutes) - (hours * 60);

  // ADD COMMENTS
  // const [text, setText] = useState("");

  // const handleSubmit = (evt) => {
	// 	evt.preventDefault();
	// 	comments.addComment({
	// 		taskId : id,
	// 		userId : "",
	// 		text : text
	// 	});
	// 	evt.target.reset();
	// }

  // const handleText = (evt) => {
  //   setComment(evt.target.value)
  // }

  return (
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
        <button>Сделать запись о работе</button>
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
      <CommentAdd taskId={task.data.id}/>
      {comment === null ? "Loading..." :
       comment.data.map(c => (
        <Comment 
        key={c.id}
        text={c.text}
        user={props.user}
        userId={c.userId}
        dateOfCreation={c.dateOfCreation}
        />
      )
)}
      </div>
      </div>
  )
})

export default InfoTask;