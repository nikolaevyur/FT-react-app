import React from "react";
import "../../components/authorization/authorization.scss"

const Authorization = () => {
  return (
    <div className="login">
      <h1 className="login__title">Авторизация</h1>
      <form>
        <label>
          <p className="login__title-login">Логин</p>
          <input className="login__input-login" type="text" />
        </label>
        <label>
          <p className="login__title-password">Пароль</p>
          <input className="login__input-password" type="password" />
        </label>
        <div>
          <button className="login__btn" type="submit">Вход</button>
        </div>
      </form>
    </div>
  )
}

export default Authorization;