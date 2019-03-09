import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import './resources/style/index.scss';

function divider(props) {
  const { vertical } = props;

  const className = classnames('divider', { 'divider--vertical': vertical });

  return <div className={className} />;
}

divider.propTypes = {
  vertical: PropTypes.bool
};

divider.defaultProps = {
  vertical: false
};

export default divider;
