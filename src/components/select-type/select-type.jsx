import React, { useState } from 'react';

import './select-type.scss'

const SelectType = ({ filters, setFilters }) => {

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
    setFilters({ ...filters, type: updatedList })
  };

  return (
    <div className="select-type">
      <input
        onClick={toggleDropdownShown}
        placeholder={"Тип"}
        type="text"
        className="select-type__input input"
        maxlength="0"
      />
      <div className="select-type__checklist">
        {isDropdownShown &&
          <div className="select-type__dropdown">
            <div className="dropdown__item">
            <input value={"bug"} type="checkbox" onClick={(event) => handleCheck(event)} className="input"/>
            <label>Ошибка</label>
            </div>
            <div className="dropdown__item">
            <input value={"task"} type="checkbox" onClick={(event) => handleCheck(event)} className="input"/>
            <label>Задача</label>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default SelectType;