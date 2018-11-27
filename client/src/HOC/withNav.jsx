import React from 'react';
import PropTypes from 'prop-types';

function withNav(Comp) {
  return (props) => {
    const { navClassName } = props;

    return (
      <nav className={navClassName}>
        <Comp {...props} />
      </nav>
    );
  }
}

withNav.propTypes = {
  className: PropTypes.string
};

withNav.defaultProps = {
  className: PropTypes.string
};

export default withNav;
