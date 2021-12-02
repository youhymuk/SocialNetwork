import React, {useState} from 'react';
import css from './Pagination.module.scss';

const Pagination = ({totalItemsCount, currentPage, pageSize, portionSize = 10, onChangePage}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const [portionNumber, setPortionNumber] = useState(1);
    const portionCount = Math.ceil(pagesCount / portionSize);
    const leftPageNumberPortion = (portionNumber - 1) * portionSize + 1;
    const rightPageNumberPortion = portionNumber * portionSize;

    const isDisabledPrevButton = portionNumber === 1;
    const isDisabledNextButton = portionNumber === portionCount;

    console.log(currentPage)

    return (
        <div className={css.pagination}>
            <button disabled={isDisabledPrevButton} onClick={() => setPortionNumber(portionNumber - 1)}>◄</button>
            <ul>
                {pages
                .filter((page) => page >= leftPageNumberPortion && page <= rightPageNumberPortion)
                .map((page) => (
                    <li
                        className={currentPage === page ? css.active_page : null}
                        onClick={() => onChangePage(page)}
                        key={page.id}
                    >
                        {page}
                    </li>
                ))}
            </ul>
            <button disabled={isDisabledNextButton} onClick={() => setPortionNumber(portionNumber + 1)}>►</button>
        </div>
    );
};
export default Pagination;
