import React from 'react';
import PropTypes from 'prop-types';

import './resources/style/index.scss';

function MiniProgressBar(props) {
  const { current, total } = props;

  function currentPercent() {
    return (current / total) * 100;
  }

  const style = { width: `${currentPercent()}%` };

  return (
    <div className="mini-pg">
      <div className="mini-pg__bg">
        <div className="mini-pg__bar" style={style} />
      </div>
    </div>
  );
}

MiniProgressBar.defaultProps = {
  current: 0,
  total: 1
};

MiniProgressBar.propTypes = {
  current: PropTypes.number, 
  total: PropTypes.number
};

export default MiniProgressBar;
