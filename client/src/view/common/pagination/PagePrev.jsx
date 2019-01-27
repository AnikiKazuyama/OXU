import React from 'react';
import PageButton from './PageButton';
import Arrow from '../arrow';

function pagePrev(props) {
  const { currentPage, onClick } = props;

  return (
    <PageButton
      onClick={onClick}
      page={currentPage - 1}
      className="pagination__page-button--prev"
    >
      <Arrow />
    </PageButton>
  );
}

export default pagePrev;
