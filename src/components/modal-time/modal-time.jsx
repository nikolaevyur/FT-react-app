import React, { useState } from "react";
import { addTime, editUser } from "../../api";
import { AppRoute } from "../../const";

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
    setTime({ ...time, [name]: value});
  };

  
  const handleSubmitTime = (evt) => {
    evt.preventDefault();
    const calTime = time.number * formatTime[time.format];
    const form = {
        timeInMinutes: calTime,
        comment: time.comment,
        currentUser: loginUser.id,
    }
    console.log(
form
    );
    addTime(id, form)
      .then(() => window.location.reload())
  }

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
          <form className="modal__form" onSubmit={handleSubmitTime}>
            <div className="">
              <label>Затраченное время</label>
              <input
                name="number"
                placeholder="Время"
                className="modal__input"
                type="number"
                value={time.number}
                onChange={handleChangeTime}
                // min={0}
                required
              />
            </div>
            <div className="">
              <label>Единицы измерения</label>
              <select name="format" onChange={handleChangeTime} >
                <option defaultValue={"minute"}  value={"minute"}>Минуты</option>
                <option value={"hour"}>Часы</option>
                <option value={"day"}>Дни</option>
              </select>
            </div>
            <label>Комментарий</label>
            <div className="">
              <textarea
                name="comment"
                className=""
                value={time.comment}
                onChange={handleChangeTime}
                required
              />
            </div>
            <div className="btns">
              <button type="submit" className="btn-submit">Сохранить</button>
            </div>
          </form>
      </div>
    </div>

  )
}

export default ModalTime;