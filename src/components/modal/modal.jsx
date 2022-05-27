import React from 'react';
import "./modal.scss"

import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { AppRoute } from '../../const';
import { editUser } from '../../api';

const Modal = ({ active, setActive, user, loginUser }) => {
  const [form, setForm] = useState(user);

  const handleFieldChange = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...user, [name]: value });
  };
console.log(loginUser)
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log({...form,
			password: loginUser.password});
    editUser({...form,
			password: loginUser.password})
    .then(() => window.location.reload())
  }

  // if (location === `${AppRoute.TASK_VIEW}/${id}`) {
  // 	modalHeading = 'Запись о работе';
  // 	buttonText = 'Добавить';
  // 	defaultForm = {
  // 		comment: '',
  // 		time: 0
  // 	}
  // }

  // const handleClose = (evt) => {
  // 	evt.preventDefault();
  // 	setIsActive(!isActive);
  // }

  // const [unit, setUnit] = useState('');
  // const [modalValue, setModalValue] = useState('');

  // const handleFieldChange = (evt) => {
  // 	evt.preventDefault();
  // 	const { name, value } = evt.target;
  // 	setForm({ ...form, [name]: value })
  // }

  // const handleSubmitUser = (evt) => {
  // 	evt.preventDefault();
  // 	users.id = id;
  // 	users.editUser({
  // 		...form,
  // 		login: login,
  // 		password: localStorage.password,
  // 		id: id
  // 	})
  // 	logIn.editUser({
  // 		...form,
  // 		login: login,
  // 		password: localStorage.password,
  // 		id: id
  // 	})
  // 	handleClose(evt);
  // }

  // const handleSubmitTask = (evt) => {
  // 	let timeInMinutes;
  // 	if (unit === 'hours') {
  // 		timeInMinutes = form.time * 60;
  // 	} else {
  // 		timeInMinutes = form.time;
  // 	}
  // 	evt.preventDefault();
  // 	tasks.addTaskWorktime(id, {
  // 		timeInMinutes: timeInMinutes,
  // 		comment: form.comment,
  // 		currentUser: localStorage.authUserId
  // 	})
  // 	handleClose(evt);
  // 	evt.target.reset();
  // 	setModalValue('');
  // 	setForm({
  // 		comment: '',
  // 		time: form.time
  // 	})
  // }

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
            <textarea
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