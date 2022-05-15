import React from "react";
import "./task-status.scss"

const Status = (props) => {

  let statusClass, text;
  if (props.status === 'opened') {
    statusClass = 'task__status-open';
    text = 'Открыто';
  }
  if (props.status === 'inProgress') {
    statusClass = 'task__status-work';
    text = 'В работе';
  };
  if (props.status === 'testing') {
    statusClass = 'task__status-test';
    text = 'Тестируется';
  }
  if (props.status === 'complete') {
    statusClass = 'task__status-done';
    text = 'Сделано';
  }

  return (
    <div className="task__status">
      <div className={statusClass}>
        {text}
      </div>
    </div>
  )
}

export default Status; 