import React, { useState } from 'react';

import './select-status.scss'

const SelectStatus = ({ filters, setFilters }) => {

  const [isDropdownShown, setDropdownShown] = useState(false)
  const [checked, setChecked] = useState([]);

  const toggleDropdownShown = () => {
    setDropdownShown(!isDropdownShown)
  }

  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    console.log(checked)
    setFilters({ ...filters, status: updatedList })
  };

  return (
    <div className="select-status">
      <input
        onClick={toggleDropdownShown}
        placeholder={"Статус"}
        type="text"
        className="select-status__input"
      />
      <div className="select-status__checklist">
        {isDropdownShown &&
          <div className="select-status__dropdown">
            <div className="dropdown__item">
              <input value={"opened"} type="checkbox" onClick={handleCheck} />
              <label>Открыто</label>
            </div>
            <div className="dropdown__item">
              <input value={"inProgress"} type="checkbox" onClick={handleCheck} />
              <label>В работе</label>
            </div>
            <div className="dropdown__item">
              <input value={"testing"} type="checkbox" onClick={handleCheck} />
              <label>Тестирование</label>
            </div>
            <div className="dropdown__item">
              <input value={"complete"} type="checkbox" onClick={handleCheck} />
              <label>Сделано</label>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default SelectStatus;