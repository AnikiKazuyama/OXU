import React from 'react';
import PropTypes from 'prop-types';

import PageButton from '../PaginationButton/PaginataionButton';
import Arrow from '../../../arrow';

function PaginationNext(props) {
  const { currentPage, onClick } = props;

  return (
    <PageButton
      onClick={onClick}
      page={String(currentPage + 1)}
      className="pagination__page-button--next"
    >
      <Arrow />
    </PageButton>
  );
}

PaginationNext.propTypes = {
  currentPage: PropTypes.number,
  onClick: PropTypes.func
};

PaginationNext.defaultProps = {
  currentPage: 1,
  onClick: () => null
};

export default PaginationNext;
