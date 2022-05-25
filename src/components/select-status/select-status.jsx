import React, { useState } from 'react';

// import './app-select.scss'

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
    <div className="checkList">
      <input
        onClick={toggleDropdownShown}
        placeholder={"Статус"}
        type="text"
      />
      <div className="app-select__dropdown">
        {isDropdownShown &&
          <div>
            <input value={"opened"} type="checkbox" onClick={handleCheck} />
            <label>Открыто</label>
            <input value={"inProgress"} type="checkbox" onClick={handleCheck} />
            <label>В работе</label>
            <input value={"testing"} type="checkbox" onClick={handleCheck} />
            <label>Тестирование</label>
            <input value={"complete"} type="checkbox" onClick={handleCheck} />
            <label>Сделано</label>
          </div>
        }
      </div>
    </div>
  );
}

export default SelectStatus;