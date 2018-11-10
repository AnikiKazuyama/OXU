import React from 'react';
import PropTypes from 'prop-types';

import './style/index.scss';

function Counter(props) {
  const { icon, count, className } = props;

  const style = {
    backgroundImage: `url(${icon})`
  };

  return (
    <span className={`counter ${className}`} style={style}>{ count }</span>
  );
}

Counter.defaultProps = {
  className: '',
  icon: '',
  count: 0
};

Counter.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  count: PropTypes.number
};

export default Counter;
