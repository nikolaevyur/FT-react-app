import React from "react";
import low from "../../assets/images/low.svg";
import medium from "../../assets/images/medium.svg";
import high from "../../assets/images/high.svg";
import "./task-priority.scss"

const Priority = (props) => {

  let priorityClass, text, srcImg;
  if (props.rank === 'high') {
    priorityClass = 'task__priority-high';
    text = 'Высокий';
    srcImg = high;
  }
  if (props.rank === 'medium') {
    priorityClass = 'task__priority-medium';
    text = 'Средний';
    srcImg = medium;
  };
  if (props.rank === 'low') {
    priorityClass = 'task__priority-low';
    text = 'Низкий';
    srcImg = low;
  }

  return (
    <div className={priorityClass}>
      <img src={srcImg} alt={text} />
      {text}
    </div>
  )
}

export default Priority; 