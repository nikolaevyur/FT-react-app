import React, {useState, useEffect} from "react";
import InfoTask from "../info-task/info-task";
import { getUsers } from "../../api";
// import { users } from "../../store";

const FormBoard = () => {

  const [users, setUsers] = useState(null);
  useEffect(() => {
    getUsers().then(t => setUsers(t));
  }, []);

  if (!users) return null;

  return (
    <div className="board">
      <InfoTask user={users.data.data} />
    </div>
  )
}

export default FormBoard;