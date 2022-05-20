import React from "react";

const Pagination = ({usersPerPage, totalUsers}) => {
  const pageNumbers = []

  for (let i = 1; 1 <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul className="pagination">
        {
          pageNumbers.map(number => (
            <li className="page-item" key={number}>
              {number}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination;