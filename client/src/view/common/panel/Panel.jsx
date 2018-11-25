import React from 'react';
import PropTypes from 'prop-types';

import './style/index.scss';

function Panel(props) {
  const WHICH = {
    LEFT: 'left',
    CENTER: 'center',
    RIGHT: 'right'
  };

  const { containerClassName } = props;

  const Component = (which) => {
    if (props[which]) {
      return (
        <div className={`${props[`${which}ClassName`]} panel__${which}`}>
          { props[which] }
        </div>
      );
    }

    return props[which];
  };

  return (
    <div className={`${containerClassName} panel`}>
      { Component(WHICH.LEFT) }
      { Component(WHICH.CENTER) }
      { Component(WHICH.RIGHT) }
    </div>
  );
}

Panel.propTypes = {
  containerClassName: PropTypes.string,
  leftClassName: PropTypes.string,
  centerClassName: PropTypes.string,
  rightClassName: PropTypes.string,
  left: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  center: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  right: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
};

Panel.defaultProps = {
  containerClassName: '',
  leftClassName: '',
  centerClassName: '',
  rightClassName: '',
  left: null,
  center: null,
  right: null
};

export default Panel;
