import React from "react";
import { observer } from "mobx-react-lite";
import "moment/locale/ru";

import "./pagination.scss"

const Pagination = observer(({ item }) => {
  const totalLength = item.pagination.total;
  const page = item.pagination.page;
  const buttonQuantity = Math.ceil(item.pagination.total / item.pagination.limit);
  const arr = new Array(buttonQuantity);
  const pages = [...arr.keys()];

  const prevPage = () => {
    item.pagination.page -= 1;
    item.fetch();
  }

  const nextPage = () => {
    item.pagination.page += 1;
    item.fetch();
  }

  const handleClick = (evt) => {
    item.pagination.page = Number(evt.target.value);
    item.fetch();
  }

  return (
    <div className="pagination">
      <div className="pagination__btns" >
        <button
          className="btn btn-default"
          onClick={prevPage}
          disabled={page === 0}
        > {"Назад"} </button>

        {pages.map(pageNum => <button type="button" value={pageNum} onClick={handleClick} className="btn btn-default btn-pag" >{pageNum + 1}</button>)}

        <button
          className="btn btn-default"
          onClick={nextPage}
          disabled={Math.floor(totalLength / item.pagination.limit) < page + 1 || totalLength - (page + 1) * item.pagination.limit === 0}
        > {"Вперед"} </button>
      </div>
      <div>
        <span className="quantity-shown">
          Показано {(page * item.pagination.limit) + 1}-{((page * item.pagination.limit) + item.pagination.limit) > totalLength ? totalLength : ((page * item.pagination.limit) + item.pagination.limit)} из {totalLength}
        </span>
      </div>
    </div>
  );
});

export default Pagination;