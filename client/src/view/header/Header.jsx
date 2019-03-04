import React from 'react';

import Navigation, { NavItem } from '../common/navigation';
import Dropdown from '../common/dropdown';
import InputSearch from '../common/InputSearch';
import HeaderProfile from './headerProfile';

import withNav from '../../HOC/withNav';
import './style/index.scss';

import profileItems from '../../constants/profilePopupMenu';

const NavigationWithNav = withNav(Navigation);

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__line">
        <div className="wrapper">
          <div className="site-header__line-container">
            <div className="site-header__title-container">
              <div className="site-header__title">OXU</div>
              <div className="site-header__sub-title">{ 'taste the devil\'s fruit' }</div>
            </div>
            <InputSearch className="site-header__input" />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="site-header__container">
          <div className="site-header__maskot" />
          <NavigationWithNav navClassName="site-header__nav">
            <NavItem
              exact
              id="home"
              href="/"
              className="site-header__nav-item"
            >
              Home
            </NavItem>

            <NavItem
              id="catalog"
              href="/catalog"
              className="site-header__nav-item"
            >
              Catalog
            </NavItem>

            <NavItem
              id="news"
              href="/news"
              className="site-header__nav-item"
            >
              News
            </NavItem>

            <NavItem
              id="calendar"
              href="/calendar"
              className="site-header__nav-item"
            >
              Calendar
            </NavItem>

            <NavItem
              id="support"
              href="/support"
              className="site-header__nav-item"
            >
              Support
            </NavItem>
          </NavigationWithNav>
          <Dropdown items={profileItems.items}>
            <HeaderProfile />
          </Dropdown>
        </div>
      </div>
    </header>
  );
}

export default Header;
