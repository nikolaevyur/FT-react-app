import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTask,getUsers } from "../../api";


const EditForm = ({users, task}) => {

  const { id } = useParams();
  const [form, setForm] = useState(
      id ? task.data : 
      {
        userId: "",
        assignedId: "",
        title: "",
        description: "",
        type: "",
        timeInMinutes: 0,
        status: "",
        rank: ""
      });
      
  const handleFieldChange = (event) => {
      const { name, value } = event.target
      setForm({ ...form, [name]: value })
    }

  const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log('submit form', form);
    }
  
  const userDefault = users.find(u => u.id === task.data.assignedId)
  
  return (
    <form className="task__form" onSubmit={handleSubmit}>
    <select onChange={handleFieldChange}>
    <option defaultValue value={userDefault.id}>{userDefault.username}</option>
      {users.map(user => {
        return <option key={user.id} value={user.id}>{user.username}</option>;
    })}
    </select>
    <fieldset className="task__field task__field--title">
      <label htmlFor="title" className="task__label task__label--title">Название</label>
      <textarea
        type="text"
        onChange={handleFieldChange}
        className="task__input task__input--title"
        name="title"
        value={form.title}
        maxlength={20}
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
    <div className="btns">
      <button type="submit" className="btn-submit">{id ? 'Сохранить' : 'Добавить'}</button>
    </div>
  </form>
  )
}

export default EditForm;