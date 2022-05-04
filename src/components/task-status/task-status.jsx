import React from "react";
import "./task-status.scss"

const Status = (props) => {

  let statusClass, text;
  if (props.status === 'open') {
    statusClass = 'task__status-open';
    text = 'Открыто';
  }
  if (props.status === 'work') {
    statusClass = 'task__status-work';
    text = 'В работе';
  };
  if (props.status === 'test') {
    statusClass = 'task__status-test';
    text = 'Тестируется';
  }
  if (props.status === 'done') {
    statusClass = 'task__status-done';
    text = 'Сделано';
  }

  if (props.status === 'danger') {
    statusClass = 'task__status-danger';
    text = 'Status';
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