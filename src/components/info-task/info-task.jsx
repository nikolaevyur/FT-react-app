import React, { useEffect } from "react";
import "./info-task.scss";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getTask, addComment } from "../../api";
import { getComments } from "../../api";
import { rank } from "../../const";
import moment from "moment";
import Comment from "../comment/comment";
import { tasks, users, comments } from "../../store";

const InfoTask = observer((props) => {
  const { id } = useParams();

  const [task, setTask] = useState(null);
  useEffect(() => {
    getTask(id).then(t => setTask(t));
  }, [id]);

  const [comment, setComment] = useState(null);
  useEffect(() => {
    getComments(props.id).then(u => setComment(u));
  }, [props.id]);

  if (task === null) {
        return <p>Loading...</p>
      }

  // USERNAME
  const assignedUser = props.user.find(u => u.id === task.assignedId),
        author = props.user.find(u => u.id === task.userId);

  // TIME
  const formatDateOfCreation = moment(task.dateOfCreation).format('DD.MM.YYYY HH:mm'),
        formatDateOfUpdate = moment(task.dateOfUpdate).format('DD.MM.YYYY HH:mm');

  const timeInMinutes = task.timeInMinutes,
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
          {author === undefined ? "Loading..." : assignedUser.username}
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
      {comment === null ? 
        <p className="column-title">{`Комментарии (...)`}</p> : 
        <p className="column-title">{`Комментарии (${comment.length})`}</p>}
      {/* <form onSubmit={handleSubmit}>
				<textarea 
          placeholder="Текст комментария"
          name="comment" 
          onChange={handleText} 
          required
        >
        </textarea>
				<button type='submit'>Добавить комментарий</button>
			</form> */}
      {comment === null ? "Loading..." :
       comment.map(c => (
        <Comment 
        key={c.id}
        text={c.text}
        user={props.user}
        userId={c.userId}
        />
      )
)}
      </div>
      </div>
  )
})

export default InfoTask;