import React from 'react';
import PropTypes from 'prop-types';

import './style/index.scss';

function Counter(props) {
  const { icon, count } = props;

  const style = {
    backgroundImage: `url(${icon})`
  };

  return (
    <span style={style}>{ count }</span>
  );
}

Counter.defaultProps = {
  icon: '',
  count: 0
};

Counter.propTypes = {
  icon: PropTypes.string,
  count: PropTypes.number
};

export default Counter;
