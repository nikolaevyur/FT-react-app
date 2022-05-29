import React, { useEffect } from "react";
import { action } from "mobx";
import "moment/locale/ru";
import { observer } from "mobx-react-lite";

import "./pagination.scss"

const Pagination = observer(({item}) => {
  //длина всего списка
  const totalLength = item.pagination.total;
  //номер страници
  const page = item.pagination.page;
  //меняем страницу
  const buttonQuantity = Math.ceil(item.pagination.total / item.pagination.limit);
	const emptyArr = new Array(buttonQuantity);
	const pages = [...emptyArr.keys()];
  console.log(pages)

  //  useEffect(() => {
  // item.pagination.limit = 0
  //   });

  const prevPage = action(() => {
    item.pagination.page -= 1;
    item.fetch();
  })
  const nextPage = action(() => {
    item.pagination.page += 1;
    item.fetch();
  })

  const handleClick = action((evt) => {
    item.pagination.page = Number(evt.target.value);
    item.fetch();
  })

  return (
    <div className="pagination">

    <div className="pagination__btns" >
    <button
      className="btn btn-default"
      onClick={prevPage}
      disabled={page == 0}
    > {"Назад"} </button>

    {pages.map(pageNum => <button type="button" value={pageNum} onClick={handleClick} className="btn btn-default btn-pag" >{pageNum + 1}</button>)}

    <button
      className="btn btn-default"
      onClick={nextPage}
      disabled={Math.floor(totalLength / 8) < page+1 || totalLength-(page+1)*8 == 0}
    > {"Вперед"} </button>
    </div>
    <div>
    <span className="quantity-shown">
      Показано {(page*item.pagination.limit)+1}-{((page*item.pagination.limit)+item.pagination.limit)> totalLength ? totalLength : ((page*item.pagination.limit)+item.pagination.limit) } из {totalLength}
    </span>
    </div>

  </div>


  );
});

export default Pagination;