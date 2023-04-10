import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../store/pagination/pagination.actions';

import './Pagination.styles.css';

const Pagination = ({ currentPage, totalPages }) => {
  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  if (totalPages > 500) totalPages = 500;

  const getPageNumbersToShow = () => {
    const pageNumbersToShow = [];

    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbersToShow.push(i);
      }
      return pageNumbersToShow;
    }

    const firstPageToShow = Math.max(3, currentPage - 3);
    const lastPageToShow = Math.min(totalPages - 2, currentPage + 3);

    for (let i = firstPageToShow; i <= lastPageToShow; i++) {
      pageNumbersToShow.push(i);
    }

    if (firstPageToShow > 3) {
      pageNumbersToShow.unshift('...');
      pageNumbersToShow.unshift(2);
    } else if (firstPageToShow === 3) {
      pageNumbersToShow.unshift(2);
    }

    if (lastPageToShow < totalPages - 2) {
      pageNumbersToShow.push('...');
      pageNumbersToShow.push(totalPages - 1);
    } else if (lastPageToShow === totalPages - 2) {
      pageNumbersToShow.push(totalPages - 1);
    }

    pageNumbersToShow.unshift(1);
    pageNumbersToShow.push(totalPages);

    return pageNumbersToShow;
  };

  return (
    <div className='pagination'>
      <button
        className={currentPage === 1 ? 'disabled' : ''}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {'<'}
      </button>
      {getPageNumbersToShow().map((pageNumber, index) => {
        if (pageNumber === '...') {
          return <span key={`dots${index}`}>...</span>;
        }

        return (
          <button
            key={pageNumber}
            className={pageNumber === currentPage ? 'active' : ''}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className={currentPage === totalPages ? 'disabled' : ''}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
