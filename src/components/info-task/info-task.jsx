import React from "react";
import "./info-task.scss"

const InfoTask = () => {
  return (
    <div className="info">
      <div className="first-column">
        <div className="first-column__info-task">
          <p className="column-title">Исполнитель</p>
        </div>
        <div className="first-column__info-task">
          <p className="column-title">Автор задачи</p>
        </div>
        <div className="first-column__info-task">
          <p className="column-title">Тип запроса</p>
        </div>
        <div className="first-column__info-task">
          <p className="column-title">Приоритет</p>
        </div>
        <div className="first-column__info-task">
          <p className="column-title">Дата создания</p>
        </div>
        <div className="first-column__info-task">
          <p className="column-title">Дата изменения</p>
        </div>
        <div className="first-column__info-task">
          <p className="column-title">Затрачено времени</p>
        </div>
        <button>Сделать запись о работе</button>
      </div>
      <div className="second-column">
        <div className="second-column__description">
          <p className="column-title">Описание</p>
        </div>
      </div>
      <div className="third-column">
        {/* Комментарии */}
      </div>
    </div>
  )
}

export default InfoTask;