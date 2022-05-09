import React from "react";
import Task from "../task/task";
import "./board-tasks.scss";

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

const BoardTasks = () => {
  return (
    <div className="board">
      {/* Sorting */}

      <div className="task-wrapper">
        {tasks.map(task => (
          <Task
            name={task.name}
            user={task.user}
            type={task.type}
            status={task.status}
            priority={task.priority}
          />
        ))}
      </div>
      
      {/* Number of pages */}
    </div>
  )
}

export default BoardTasks;