import React from 'react';
import PropTypes from 'prop-types';

import './style/index.scss';

function Hero(props) {
  const { className, url, children } = props;

  return (
    <div
      className={`${className} hero`}
      style={{ backgroundImage: `url(${url})` }}
    >
      { children }
    </div>
  );
}

Hero.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string
};

Hero.defaultProps = {
  className: '',
  url: ''
};

export default Hero;
