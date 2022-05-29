import React, { useState } from "react";
import { editUser } from "../../api";
import { AppRoute } from "../../const";

import "./modal.scss";
import "../../assets/styles/_buttons.scss";

const Modal = ({ active, setActive, user, loginUser }) => {
  //Form of user
  const [form, setForm] = useState(user);

  const handleFieldChange = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log({
      ...form,
      password: loginUser.password
    });
    editUser({
      ...form,
      password: loginUser.password
    })
      .then(() => window.location.reload())
  }

  const handleCancel = (evt) => {
    evt.preventDefault();
    window.location.reload()
  }

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="modal__main-title">Редактирование пользователя</div>
          <div className="modal__first">
            <label className="modal__title">Имя пользователя</label>
            <input
              name="username"
              placeholder="Имя"
              className="modal__input input"
              type="text"
              defaultValue={form.username}
              onChange={handleFieldChange}
            />
          </div>
          <div className="modal__second">
            <label className="modal__title">URL фотографии</label>
            <input
              name="photoUrl"
              placeholder="Введите URL"
              className="modal__input input"
              type="text"
              defaultValue={form.photoUrl}
              onChange={handleFieldChange}
            />
          </div>
          <div className="modal__third">
          <label className="modal__title">О себе</label>
            <input
              name="about"
              className="modal__comment input"
              defaultValue={form.about}
              onChange={handleFieldChange}
              placeholder="Расскажите о себе"
              maxLength={50}
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

export default Modal;