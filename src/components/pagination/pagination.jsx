import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({usersPerPage, totalUsers}) => {
  const pageNumbers = []

  for (let i = 1; 1 <= (totalUsers.total / usersPerPage); i++) {
    pageNumbers.push(i)
  }
  console.log(totalUsers.total)
  return (
    <div>
      <ul className="pagination">
        {
          pageNumbers.map(number => (
            <li className="page-item" key={number}>
              <Link to="#">{number}</Link>  
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination;