import React from "react";
import Task from "../task/task";
import "./board.scss"

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
  }
]

const Board = () => {
  return (
    <div className="board">
      {/* Sorting */}

      <div className="task-wrapper">
        {tasks.map(task => (
          <Task
            name={task.name}
            user={task.user}
            type={task.type}
          />
        ))}
      </div>
      
      {/* Number of pages */}
    </div>
  )
}
export default Board;