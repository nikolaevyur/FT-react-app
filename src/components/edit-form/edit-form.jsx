import React, { useState } from "react";
import { addTask } from "../../api";
import { AppRoute } from "../../const";
import Title from "../title/title";

import "../edit-form/edit-form.scss"
import "../../assets/styles/_buttons.scss"

const EditForm = ({ users, task }) => {
  const [form, setForm] = useState(task.data);

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(form);
    addTask(form)
      .then(() => window.location.assign(AppRoute.MAIN))
  }

  const handleCancel = (evt) => {
    evt.preventDefault();
    window.history.back()
  }

  return (
    <div className="wrapper">
      <Title>
        <div className="title__text">
          Редактирование
        </div>
        <div className="title__buttons">
          <button onClick={handleSubmit} type="submit" className="btn btn-primary">Сохранить</button>
          <button onClick={handleCancel} className="btn btn-default">Отмена</button>
        </div>
      </Title>
      <div className="board">
        <form className="task__form" onSubmit={handleSubmit}>
          <div className="column__first">
            <label htmlFor="title" className="column-title">Исполнитель</label>
            <select
              className="input"
              name="assignedId"
              defaultValue={form.assignedId}
              onChange={handleFieldChange}>
              {users.map(user => {
                return <option key={user.id} value={user.id}>{user.username}</option>;
              })}
            </select>
            <label htmlFor="title" className="column-title">Тип запроса</label>
            <select className="input" name="type" defaultValue={form.type} onChange={handleFieldChange}>
              <option value={"task"}
              >Задача
              </option>
              <option value={"bug"}
              >Ошибка
              </option>
            </select>

            <label htmlFor="rank" className="column-title">Приоритет</label>
            <select className="input" name="rank" defaultValue={form.rank} onChange={handleFieldChange}>
              <option value={"low"}>Низкий</option>
              <option value={"medium"}>Средний</option>
              <option value={"high"}> Высокий</option>
            </select>
          </div>
          <div className="column__second">
            <fieldset>
              <label htmlFor="title" className="task__label task__label--title">Название</label>
              <textarea
                type="text"
                onChange={handleFieldChange}
                className="column__input--title input"
                name="title"
                value={form.title}
                required
              ></textarea>
            </fieldset>
            <fieldset className="column__description">
              <label htmlFor="description" className="column-title">Описание</label>
              <textarea
                type="text"
                onChange={handleFieldChange}
                className="input"
                name="description"
                value={form.description}
                required
              ></textarea>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditForm;