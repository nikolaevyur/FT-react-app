import React, { useState } from "react";
import { editUser } from "../../api";
import { AppRoute } from "../../const";

import "./modal.scss"

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

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="">
            <label>Имя пользователя</label>
            <input
              name="username"
              placeholder="Имя"
              className="modal__input"
              type="text"
              defaultValue={form.username}
              onChange={handleFieldChange}
            />
          </div>
          <div className="">
            <label>URL фотографии</label>
            <input
              name="photoUrl"
              placeholder="Введите URL"
              className="modal__input"
              type="text"
              defaultValue={form.photoUrl}
              onChange={handleFieldChange}
            />
          </div>
          <label>О себе</label>
          <div className="">
            <input
              name="about"
              className=""
              defaultValue={form.about}
              onChange={handleFieldChange}
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

export default Modal;