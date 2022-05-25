import React, { useState } from 'react';

// import './app-select.scss'

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
    <div className="checkList">
      <input
        onClick={toggleDropdownShown}
        placeholder={"Тип"}
        type="text"
      />
      <div className="app-select__dropdown">
        {isDropdownShown &&
          <div>
            <input value={"bug"} type="checkbox" onClick={(event) => handleCheck(event)} />
            <label>Ошибка</label>
            <input value={"task"} type="checkbox" onClick={(event) => handleCheck(event)} />
            <label>Задача</label>
          </div>
        }
      </div>
    </div>
  );
}

export default SelectType;