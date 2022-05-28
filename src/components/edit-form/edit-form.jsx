import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addTask } from "../../api";
import { AppRoute } from "../../const";

import "../edit-form/edit-form.scss"
import Title from "../title/title";


const EditForm = ({ users, task }) => {
  // const { id } = useParams();
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

  // const userDefault = users.find(u => u.id === task.data.assignedId)

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
            <label htmlFor="title" className="task__label task__label--title">Исполнитель</label>
            <select
              name="assignedId"
              defaultValue={form.assignedId}
              onChange={handleFieldChange}>
              {/* <option defaultValue value={userDefault.id}>{userDefault.username}</option> */}
              {users.map(user => {
                return <option key={user.id} value={user.id}>{user.username}</option>;
              })}
            </select>
            <label htmlFor="title" className="task__label task__label--title">Тип запроса</label>
            <select name="type" defaultValue={form.type} onChange={handleFieldChange}>
              <option value={"task"}
              >Задача
              </option>
              <option value={"bug"}
              >Ошибка
              </option>
            </select>

            <label htmlFor="rank" className='taskPage-title'>Приоритет</label>
            <select name="rank" defaultValue={form.rank} onChange={handleFieldChange}>
              <option value={"low"}>Низкий</option>
              <option value={"medium"}>Средний</option>
              <option value={"high"}> Высокий</option>
            </select>
          </div>
          <div className="column__second">
            <fieldset className="task__field task__field--title">
              <label htmlFor="title" className="task__label task__label--title">Название</label>
              <textarea
                type="text"
                onChange={handleFieldChange}
                className="task__input task__input--title"
                name="title"
                value={form.title}
                required
              ></textarea>
            </fieldset>
            <fieldset className="task__field task__field--description">
              <label htmlFor="description" className="task__label task__label--description">Описание</label>
              <textarea
                type="text"
                onChange={handleFieldChange}
                className="task__input task__input--description"
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