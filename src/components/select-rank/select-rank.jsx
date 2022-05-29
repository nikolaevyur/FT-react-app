import React, { useState } from 'react';

import './select-rank.scss'

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
    <div className="select-rank">
      <input
        onClick={toggleDropdownShown}
        placeholder={"Приоритет"}
        type="text"
        className="select-rank__input input"
        maxlength="0"
      />
      <div className="select-rank__checklist">
        {isDropdownShown &&
          <div className="select-rank__dropdown">
            <div className="dropdown__item">
            <input value={"low"} type="checkbox" onClick={handleCheck} className="input"/>
            <label>Низкий</label>
            </div>
            <div className="dropdown__item">
            <input value={"medium"} type="checkbox" onClick={handleCheck} className="input"/>
            <label>Средний</label>
            </div>
            <div className="dropdown__item">
            <input value={"high"} type="checkbox" onClick={handleCheck} className="input"/>
            <label>Высокий</label>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default SelectRank;