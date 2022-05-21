import React, {useState, useEffect} from "react";
import Task from "../task/task";
import "./board-tasks.scss";
import { observer } from "mobx-react-lite";
import { getTasks, getUsers } from "../../api";

const BoardTasks = () => {
  const [users, setUsers] = useState(null);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    getTasks().then(t => setTasks(t));
  }, []);

  useEffect(() => {
    getUsers().then(u => setUsers(u));
  }, []);

  // if (tasks === null) {
  //   return <p>Loading...</p>
  // }

  if (!tasks) return null;
  if (!users) return null;

  return (
    <div className="board">
      {/* Sorting */}

      <div className="task-wrapper">
      {tasks.data.data.length === 0 && <p>Задач нет, нажмите кнопку "Добавить"</p>}
      {tasks.data.data.map(task => (          
        <Task
          key={task.id}
          title={task.title}
          type={task.type}
          status={task.status}
          rank={task.rank}
          assignedId={task.assignedId}
          id={task.id}
          user={users.data.data}
          task={task}/>
        ))}

      </div>
      
      {/* Number of pages */}
    </div>
  )
}

export default BoardTasks;