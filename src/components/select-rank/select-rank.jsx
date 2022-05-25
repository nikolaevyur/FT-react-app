import React, { useState } from 'react';

// import './app-select.scss'

const SelectRank = ({ filters, setFilters }) => {

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
    setFilters({ ...filters, rank: updatedList })
  };

  return (
    <div className="checkList">
      <input
        onClick={toggleDropdownShown}
        placeholder={"Приоритет"}
        type="text"
      />
      <div className="app-select__dropdown">
        {isDropdownShown &&
          <div>
            <input value={"low"} type="checkbox" onClick={handleCheck} />
            <label>Низкий</label>
            <input value={"medium"} type="checkbox" onClick={handleCheck} />
            <label>Средний</label>
            <input value={"high"} type="checkbox" onClick={handleCheck} />
            <label>Высокий</label>
          </div>
        }
      </div>
    </div>
  );
}

export default SelectRank;