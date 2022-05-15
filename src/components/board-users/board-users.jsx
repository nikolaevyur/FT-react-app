import React from "react";
import UsersList from "../users-list/users-list";
import "./board-users.scss"

const tasks = [
  {
    type: 'task',
    name: 'Задача 1',
    user: 'Juri',
    status: 'open',
    priority: 'high',
  },
  {
    type: 'bug',
    name: 'Задача 2',
    user: 'Grut',
    status: 'test',
    priority: 'medium',
  },

  {
    type: 'task',
    name: 'Задача 3',
    user: 'Iron man',
    status: 'done',
    priority: 'low'
  },

  {
    type: 'bug',
    name: 'Задача 4',
    user: 'Iron man',
    status: 'work',
    priority: 'low'
  },

  {
    type: 'bug',
    name: 'Задача 4',
    user: 'Iron man',
    status: 'danger',
    priority: 'low'
  }
]

const BoardUsers = ({tasks, users}) => {
  return (
    <div className="board">
      <div className="users-wrapper">
        {users.map(user => (
          <UsersList name={user.username}
          />
        ))}
      </div>
      {/* Number of pages */}
    </div>
  )
}
export default BoardUsers;