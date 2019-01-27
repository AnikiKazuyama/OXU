import React from 'react';
import PropTypes from 'prop-types';

import PageButton from './PageButton';
import Arrow from '../arrow';

function pageNext(props) {
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

pageNext.propTypes = {
  currentPage: PropTypes.number,
  onClick: PropTypes.func
};

pageNext.defaultProps = {
  currentPage: 1,
  onClick: () => null
};

export default pageNext;
