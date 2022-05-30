import React, { useState } from "react";
import { addTask } from "../../api";
import { AppRoute } from "../../const";
import Title from "../title/title";

const AddForm = ({ users }) => {
  const userData = JSON.parse(localStorage.getItem("loginUser"))
  const [form, setForm] = useState(
    {
      userId: userData.id,
      assignedId: userData.id,
      title: "",
      description: "",
      type: "task",
      timeInMinutes: 0,
      status: "opened",
      rank: "low"
    });

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
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
          Создание
        </div>
        <div className="title__buttons">
          <button onClick={handleSubmit} type="submit" className="btn btn-primary">Добавить</button>
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
              defaultValue={userData.id}
              onChange={handleFieldChange}>
              {users.map(user => {
                return <option key={user.id} value={user.id}>{user.username}</option>;
              })}
            </select>
            <label htmlFor="title" className="column-title">Тип запроса</label>
            <select name="type" onChange={handleFieldChange} className="input" >
              <option defaultValue={"task"} value={"task"}
              >Задача
              </option>
              <option value={"bug"}
              >Ошибка
              </option>
            </select>

            <label htmlFor="rank" className="column-title">Приоритет</label>
            <select name="rank" onChange={handleFieldChange} className="input" >
              <option defaultValue={"low"} value={"low"}>Низкий</option>
              <option value={"medium"}>Средний</option>
              <option value={"high"}> Высокий</option>
            </select>
          </div>
          <div className="column__second">
            <fieldset>
              <label htmlFor="title" className="column-title">Название</label>
              <textarea
                type="text"
                onChange={handleFieldChange}
                className="input column__input--title"
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

export default AddForm;