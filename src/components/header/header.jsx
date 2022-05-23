import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";
import HeaderMenu from "../header-menu/header-menu";
import HeaderUser from "../header-user/header-user";
import "./header.scss"

const Header = () => {
  return (
    <div className="header">
      <Link to={AppRoute.MAIN}>
        <div className="header__logo"></div>
      </Link>
      <HeaderMenu />
      <HeaderUser/>
    </div>
  )
}

export default Header;