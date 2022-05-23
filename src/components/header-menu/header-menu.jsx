import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import "./header-menu.scss"

const HeaderMenu = () => {
  return (
    <nav className={`header__menu ${window.location.pathname === AppRoute.LOGIN && "login-false"}`}>
     <Link to={AppRoute.MAIN}
            className={
              `header__menu-link 
            ${window.location.pathname === AppRoute.MAIN && 'header__menu-active'}`
            }
          >Задачи
          </Link>

          <Link to={AppRoute.USERS}
            className={
              `header__menu-link 
            ${window.location.pathname === AppRoute.USERS && 'header__menu-active'}`
            }
          >Пользователи
          </Link>
    </nav>
  )
}

export default HeaderMenu;