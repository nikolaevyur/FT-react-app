import React from "react";
import "./board-profile.scss"

const BoardProfile = () => {
  return (
    <div className="board">
      <div className="profile">
        <div className="profile__info">
          <div className="profile__photo"></div>
          <div className="profile__about">
            <p className="profile__title">О себе</p>
            Нормальный
          </div>
        </div>
        <div className="profile__tasks">
        </div>
      </div>
      {/* Number of pages */}
    </div>
  )
}
export default BoardProfile;