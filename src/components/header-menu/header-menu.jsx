import React from "react";
import { NavLink } from "react-router-dom";
import { AppRoute } from "../../const";
import "./header-menu.scss"

const HeaderMenu = () => {
  return (
    <nav className="header__menu">
     <NavLink to="/"
            className={
              `header__menu-link 
            ${window.location.pathname === AppRoute.MAIN && 'header__menu-active'}`
            }
          >Задачи
          </NavLink>

          <NavLink to="/users"
            className={
              `header__menu-link 
            ${window.location.pathname === AppRoute.USERS && 'header__menu-active'}`
            }
          >Пользователи
          </NavLink>
    </nav>
  )
}

export default HeaderMenu;