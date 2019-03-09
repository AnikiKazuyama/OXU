import React from 'react';
import PropTypes from 'prop-types';

import clouds from '../../../../public/imgs/clouds.jpg';

import './resources/style/index.scss';

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
  url: clouds
};

export default Hero;
