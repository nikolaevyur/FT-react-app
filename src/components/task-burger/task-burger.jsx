import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import "./task-burger.scss"

const TaskBurger = (props) => {
  return (
    <div className="task__burger dropdown">
      <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1C0 0.447715 0.447715 0 1 0H9C9.55228 0 10 0.447715 10 1C10 1.55228 9.55228 2 9 2H1C0.447716 2 0 1.55228 0 1Z" fill="#7B61FF"/>
        <path d="M0 6C0 5.44772 0.447715 5 1 5H9C9.55228 5 10 5.44772 10 6C10 6.55228 9.55228 7 9 7H1C0.447716 7 0 6.55228 0 6Z" fill="#7B61FF"/>
        <path d="M0 11C0 10.4477 0.447715 10 1 10H9C9.55228 10 10 10.4477 10 11C10 11.5523 9.55228 12 9 12H1C0.447716 12 0 11.5523 0 11Z" fill="#7B61FF"/>
      </svg>
      <div className="task__dropdown">
      <Link
          to={`${AppRoute.ADD}/${props.id}`}
          className="task__link"
        >Редактировать
        </Link>
        <Link
          to={""}
          className="task__link link-out"
        >Удалить
        </Link>
        <Link
          to={""}
          className="task__link"
        >На тестирование
        </Link>
        <Link
          to={""}
          className="task__link"
        >Переоткрыть
        </Link>
      </div>
    </div>
  )
}

export default TaskBurger;