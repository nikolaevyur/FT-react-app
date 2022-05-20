import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../api";
import profile from "../../assets/images/profile.svg";
import "./board-profile.scss"

const BoardProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(id).then(u => setUser(u));
  }, [id]);

  if (user === null) {
    return <p>Loading...</p>
  }

  return (
    <div className="board">
      <div className="profile">
        <div className="profile__info">
            <img 
            src={user.data.photoUrl === null ? profile : user.data.photoUrl} 
            alt="Фото"
            className="profile__photo" 
            />
          <div className="profile__about">
            <p className="profile__title">О себе</p>
            {user.data.about}
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