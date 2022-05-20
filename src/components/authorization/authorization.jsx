import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { users } from '../../store';
import "../../components/authorization/authorization.scss"

const Authorization = observer((props) => {

  const [form, setForm] = useState(
    {
      login: "",
      password: ""
    }
  )

  const handleSubmit = (evt) => {
    evt.preventDefault();
    users.login(form)
  }

  const handleForm = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value })
  }

  console.log(props.login.profile.id)

  return (
    <div className="login">
      <h1 className="login__title">Авторизация</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p className="login__title-input">Логин</p>
          <input
            className="login__input"
            type="text"
            placeholder="Логин"
            value={form.login}
            name="login"
            onChange={handleForm}
          />
        </label>
        <label>
          <p className="login__title-input">Пароль</p>
          <input
            className="login__input"
            type="password"
            placeholder="Пароль"
            value={form.password}
            name="password"
            onChange={handleForm}
          />
        </label>
        <div>
          <button className="login__btn" type="submit">Вход</button>
        </div>
      </form>
    </div>
  )
})

export default Authorization;