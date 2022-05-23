import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { data, getTasks, getTasksPag } from "../../api";

const Pagination = ({object}) => {
  const pageNumbers = []
 
  const lengthObject = object.total;

  console.log(lengthObject)

  const page = 0;

  const startPage = () => {
    // object.page = 0;
    getTasksPag(page + 2);
  }

  return (
    <div className="pag_buttons">

    <button
      className='btn default'
      onClick={startPage}
      // disabled={ page == 0}
    > {"Начало"} </button>

  </div>


  )
};

export default Pagination;