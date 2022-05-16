import React from "react";
import Task from "../task/task";
import "./board-tasks.scss";
import { observer } from "mobx-react-lite";

const BoardTasks = ({tasks, users}) => {
  return (
    <div className="board">
      {/* Sorting */}

      <div className="task-wrapper">
      {tasks.map(task => (          
        <Task
          key={task.id}
          
          title={task.title}
          type={task.type}
          status={task.status}
          rank={task.rank}
          assignedId={task.assignedId}
          id={task.id}
          user={users}
          
          task={task}/>
        ))}

      </div>
      
      {/* Number of pages */}
    </div>
  )
}

export default BoardTasks;