import React, {useState, useEffect} from "react";
import User from "../user/user";
import "./board-users.scss"
import { getUsers} from "../../api";
import Pagination from "../pagination/pagination";
import { usersFilter } from "../../store";
import { observer } from "mobx-react-lite";

const BoardUsers = observer(() => {
  const users = usersFilter.data;
  const usersTotal = usersFilter
  console.log(usersTotal)
  // const [users, setUsers] = useState(null);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [usersPerPage] = useState(10);

  // useEffect(() => {
  //   getUsersPag().then(u => setUsers(u));
  // }, []);

  // if (!users) return null;

  // const lastUserIndex = currentPage *usersPerPage
  // const firstUserIndex = lastUserIndex - usersPerPage
  // const currentUser = users.data.data.slice(firstUserIndex, lastUserIndex)

  return (
    <div className="board">
      <div className="users-wrapper">
        {users.map(user => (
          <User 
          name={user.username}
          user={user}
          users={users}
          />
        ))}
      </div>
     <Pagination 
    item={usersTotal}
     />
    </div>
  )
})

export default BoardUsers;