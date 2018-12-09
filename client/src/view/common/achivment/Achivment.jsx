import React from 'react';
import PropTypes from 'prop-types';

import Image from '../image';
import ProgressBar from '../miniProgressBar';

import './style/index.scss';

function Achivment(props) {
  const {
    icon,
    name,
    description,
    status: { current, total }
  } = props;

  function bottom() {
    if (current >= total) {
      return <div className="achivment__complete">Complete</div>;
    }

    return (
      <div className="achivment__progress">
        <ProgressBar current={current} total={total} />
        <div className="achivment__count">{ `${current} / ${total}` }</div>
      </div>
    );
  }

  return (
    <div className="achivment">
      <div className="achivment__body">
        <div className="achivment__icon">
          <Image src={icon} alt="zoro-achivment" />
        </div>
        <div className="achivment__content">
          <div className="achivment__name">{name}</div>
          <div className="achivment__description">{description}</div>
        </div>
      </div>
      <div className="achivment__footer">
        <div className="achivment__status">
          { bottom() }
        </div>
      </div>
    </div>
  );
}

Achivment.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.shape({ current: PropTypes.number, total: PropTypes.number })
};

Achivment.defaultProps = {
  icon: '',
  name: '',
  description: '',
  status: { current: 0, total: 1 }
};

export default Achivment;
