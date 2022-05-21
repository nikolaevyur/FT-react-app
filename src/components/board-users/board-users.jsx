import React, {useState, useEffect} from "react";
import User from "../user/user";
import "./board-users.scss"
import { getUsers} from "../../api";
import Pagination from "../pagination/pagination";

const BoardUsers = () => {
  const [users, setUsers] = useState(null);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [usersPerPage] = useState(10);

  useEffect(() => {
    getUsers().then(u => setUsers(u));
  }, []);

  if (!users) return null;

  // const lastUserIndex = currentPage *usersPerPage
  // const firstUserIndex = lastUserIndex - usersPerPage
  // const currentUser = users.data.data.slice(firstUserIndex, lastUserIndex)

  return (
    <div className="board">
      <div className="users-wrapper">
        {users.data.data.map(user => (
          <User 
          name={user.username}
          user={user}
          users={users.data.data}
          />
        ))}
      </div>
     {/* <Pagination 
      usersPerPage={usersPerPage}
      totalUsers={users.data}
     /> */}
    </div>
  )
}
export default BoardUsers;