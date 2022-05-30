import React from "react";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";
import profile from "../../assets/images/profile.svg";

import "./header-user.scss"

const HeaderUser = () => {
  const handleLogout = (evt) => {
    evt.preventDefault();
    localStorage.clear();
    window.location.assign(AppRoute.LOGIN)
  };

  const loginUserData = window.location.pathname === AppRoute.LOGIN ? {} : JSON.parse(localStorage.getItem("loginUser"));

  return (
    <div className={`header__user dropdown ${window.location.pathname === AppRoute.LOGIN && "login-false"} `}>
      <div className="header__user-name">{loginUserData.username}</div>
      <img
        src={loginUserData.photoUrl === null ? profile : loginUserData.photoUrl}
        alt="Фото"
        className="header__user-photo"
      />
      <div className="header__dropdown">
        <Link
          to={`${AppRoute.PROFILE}/${loginUserData.id}`}
          className="header__link"
        >Посмотреть профиль
        </Link>
        <Link
          to={AppRoute.LOGIN}
          onClick={handleLogout}
          className="header__link link-out"
        >Выйти из системы
        </Link>
      </div>
    </div>
  )
}

export default HeaderUser;