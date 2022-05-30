import React, { useState } from "react";
import { addTime } from "../../api";

import "./modal-time.scss"

const ModalTime = ({ active, setActive, loginUser, id }) => {
  const [time, setTime] = useState({
    number: "",
    format: "",
    comment: ""
  });

  const formatTime = {
    "minute": 1,
    "hour": 60,
    "day": 1440
  }

  const handleChangeTime = (evt) => {
    const { name, value } = evt.target;
    setTime({ ...time, [name]: value });
  };

  const handleSubmitTime = (evt) => {
    evt.preventDefault();
    const calTime = time.number * formatTime[time.format];
    const form = {
      timeInMinutes: calTime,
      comment: time.comment,
      currentUser: loginUser.id,
    }
    addTime(id, form)
      .then(() => window.location.reload())
  }

  const handleCancel = (evt) => {
    evt.preventDefault();
    window.location.reload()
  }

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <form className="modal__form" onSubmit={handleSubmitTime}>
          <div className="modal__main-title">Запись о работе</div>
          <div className="modal__first">
            <label className="modal__title">Затраченное время</label>
            <input
              name="number"
              placeholder="Время"
              className="modal__input input"
              type="number"
              value={time.number}
              onChange={handleChangeTime}
              required
            />
          </div>
          <div className="modal__second">
            <label className="modal__title">Единицы измерения</label>
            <select className="modal__input input" name="format" onChange={handleChangeTime} >
              <option hidden>Выберите единицу измерения</option>
              <option defaultValue={"minute"} value={"minute"}>Минуты</option>
              <option value={"hour"}>Часы</option>
              <option value={"day"}>Дни</option>
            </select>
          </div>
          <div className="modal__third">
            <label className="modal__title">Комментарий</label>
            <input
              name="comment"
              value={time.comment}
              onChange={handleChangeTime}
              required
              className="modal__comment input"
            />
          </div>
          <div className="modal__btns">
            <button type="submit" className="btn btn-primary">Сохранить</button>
            <button onClick={handleCancel} className="btn btn-default">Отмена</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default ModalTime;