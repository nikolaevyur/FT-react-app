import React from 'react';
import { observer } from 'mobx-react-lite';

const PaginationButton = observer(({ pageNum, setPage, page }) => {

	const handleClick = (evt) => {
		evt.preventDefault();
		setPage(Number(evt.target.value));
	}

	return (
		<li className='pagination-item'>
			<button className={`button button-${pageNum === page ? 'primary' : 'default'} button-pagination`} type='button' value={pageNum} onClick={handleClick}>{pageNum += 1}</button>
		</li>
	)
})

export default PaginationButton;