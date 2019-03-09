import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

function PaginataionButton(props) {
  const {
    page,
    onClick,
    isActive,
    className,
    children
  } = props;

  function handleClick() {
    onClick(Number(page));
  }

  function getClassName() {
    const requireClassName = 'pagination__page-button';

    return classNames(
      requireClassName,
      className,
      { [`${requireClassName}--active`]: isActive }
    );
  }

  const content = children || page;

  return (
    <div
      className={getClassName()}
      role="link"
      tabIndex="0"
      onClick={handleClick}
    >
      { content }
    </div>
  );
}

PaginataionButton.defaultProps = {
  isActive: false,
  page: '',
  onClick: () => null,
  className: '',
  children: null
};

PaginataionButton.propTypes = {
  isActive: PropTypes.bool,
  page: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.element || PropTypes.node
};

export default PaginataionButton;
