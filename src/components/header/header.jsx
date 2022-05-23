import React from "react";
import HeaderMenu from "../header-menu/header-menu";
import HeaderUser from "../header-user/header-user";
import "./header.scss"

const Header = ({login}) => {
  return (
    <div className="header">
      <div className="header__logo"></div>
        <HeaderMenu />
        <HeaderUser login={login}/>
    </div>
  )
}

export default Header;