import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavItem(props) {
  function item() {
    const {
      activeClassName,
      className,
      exact,
      href,
      children
    } = props;
    
    const navitem = href
      ? (
        <NavLink
          exact={exact}
          to={href}
          activeClassName={`navigation__item--active ${activeClassName}`}
          className={`navigation__item ${className}`}
        >
          { children }
        </NavLink>
      )
      : (
        <div className={`navigation__item ${className}`}>
          { children }
        </div>
      );

    return (navitem);
  }

  return (
    <li>
      { item() }
    </li>
  );
}

NavItem.porpTypes = {
  activeClassName: PropTypes.string,
  className: PropTypes.string,
  exact: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
};

NavItem.defaultProps = {
  activeClassName: '',
  className: '',
  exact: false,
  href: '',
  children: null
};

export default NavItem;
