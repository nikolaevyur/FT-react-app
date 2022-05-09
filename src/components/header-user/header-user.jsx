import React from "react";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";
import "./header-user.scss"

const HeaderUser = () => {
  return (
    <div className="header__user dropdown">
      <div className="header__user-name">Николаев Юрий</div>
      <div className="header__user-photo">
      </div>
      <div className="header__dropdown">
        <Link
          to={AppRoute.PROFILE}
          className="header__link"
        >Посмотреть профиль
        </Link>
        <Link
          to={""}
          className="header__link link-out"
        >Выйти из системы
        </Link>
      </div>
    </div>
  )
}

export default HeaderUser;