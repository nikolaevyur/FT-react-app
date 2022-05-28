import React from "react";
import { Link } from "react-router-dom";
import { changeStatus } from "../../api";
import { AppRoute } from "../../const";
import { tasksFilter } from "../../store";
import "./task-burger.scss"

const TaskBurger = ({ id, status }) => {

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
    <div className="task__burger dropdown" >
      <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1C0 0.447715 0.447715 0 1 0H9C9.55228 0 10 0.447715 10 1C10 1.55228 9.55228 2 9 2H1C0.447716 2 0 1.55228 0 1Z" fill="#7B61FF" />
        <path d="M0 6C0 5.44772 0.447715 5 1 5H9C9.55228 5 10 5.44772 10 6C10 6.55228 9.55228 7 9 7H1C0.447716 7 0 6.55228 0 6Z" fill="#7B61FF" />
        <path d="M0 11C0 10.4477 0.447715 10 1 10H9C9.55228 10 10 10.4477 10 11C10 11.5523 9.55228 12 9 12H1C0.447716 12 0 11.5523 0 11Z" fill="#7B61FF" />
      </svg>
      <div className="task__dropdown">
        <Link
          to={`${AppRoute.ADD}/${id}`}
          className="task__link"
        >
          <button className="task__link btn-status">
            Редактировать
          </button>
        </Link>
        <Link
          to={""}
          className="task__link"
        >
          <button 
            onClick={handleDelete}
            className="task__link link-out btn-status">
            Удалить
          </button>
        </Link>
        {status === "opened" &&
          <button
            className="task__link btn-status"
            onClick={changeStatus}
            value={"inProgress"}
          >
            Взять в работу
          </button>
        }
          {status === "inProgress" &&
            <button
              className="task__link btn-status"
              onClick={changeStatus}
              value={"testing"}
            >
              На тестирование
            </button>
          }
        {(status === "inProgress" || status === "testing" || status === "complete") &&
          <button
            className="task__link btn-status"
            onClick={changeStatus}
            value={"opened"}
          >
            Переоткрыть
          </button>
        }
        {(status === "inProgress" || status === "testing" || status === "opened") &&
          <button
            className="task__link btn-status"
            onClick={changeStatus}
            value={"complete"}
          >
            Сделано
          </button>}
      </div>
    </div>
  )
}

export default TaskBurger;