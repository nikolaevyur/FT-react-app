import React from "react";
import HeaderMenu from "../header-menu/header-menu";
import "./header.scss"

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo"></div>
      <HeaderMenu />
    </div>
  )
}

export default Header;