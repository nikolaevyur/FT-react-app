import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { tasksFilter } from '../../store';
import SelectRank from '../select-rank/select-rank';
import SelectStatus from '../select-status/select-status';
import SelectType from '../select-type/select-type';

import './filters.scss'


const Filters = observer((props) => {
  const [filters, setFilters] = useState({
    query: '',
    assignedUsers: [],
    type: [],
    status: [],
    rank: [],
  });
  const [checked, setChecked] = useState([]);

  const [isDropdownShown, setDropdownShown] = useState(false)
  // Сделать отдельно открывашки для каждого дропдауна

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
    setFilters({ ...filters, assignedUsers: updatedList })
  };

  const handlChange = (evt) => { setFilters({ ...filters, query: evt.target.value }) }

  //отправляем форму
  const handlSubmit = (evt) => {
    evt.preventDefault();
    tasksFilter.preFiltredData = filters;
    tasksFilter.pagination.page = 0;
    tasksFilter.fetch();
    console.log(tasksFilter.data)
    setDropdownShown(false)
  }

  console.log(filters)
  return (
    <div className='filters__wrapper'>
      <SelectType filters={filters} setFilters={setFilters} />
      <input
        type="text"
        onChange={handlChange}
        value={filters.query}
      />
      <div className="checkList">
      <input 
        onClick={toggleDropdownShown} 
        readOnly 
        placeholder={"Пользователь"} 
        type="text" 
      />
        <div className="app-select__dropdown">
          {isDropdownShown && props.users.map(user => (
            <div key={user.id}>
              <input value={user.id} type="checkbox" onClick={(event) => handleCheck(event)} />
              <label htmlFor={user.id}>{user.username}</label>
            </div>
          ))}
        </div>
      </div>
      <SelectStatus 
        filters={filters} 
        setFilters={setFilters} />
      <SelectRank filters={filters} setFilters={setFilters} />
      <button onClick={handlSubmit}>
        Применить
      </button>
    </div>
  );
})

export default Filters