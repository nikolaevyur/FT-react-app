import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import "../../components/authorization/authorization.scss"
import { AppRoute } from '../../const';

const Authorization = observer(({ login }) => {

  const [form, setForm] = useState(
    {
      login: "",
      password: ""
    }
  )
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await login.getLogin(form)
    if (login.loginUser.id) {
      localStorage.setItem("login", true);
      localStorage.setItem("loginUser", JSON.stringify({...login.loginUser}))
      window.location.assign(AppRoute.MAIN)
    }
    else {
      alert("Ошибка! Пропробуйте снова.")
    }
  }

  const handleForm = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value })
  }

  // console.log(login.loginUser.username)

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