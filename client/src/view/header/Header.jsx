import React from 'react';

import Navigation from '../common/navigation';
import Dropdown from '../common/dropdown';
import InputSearch from '../common/InputSearch';
import HeaderProfile from './headerProfile';

import navigationItems from '../../constants/headerNavigation';
import './style/index.scss';

import profileItems from '../../constants/profilePopupMenu';

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
          <Navigation items={navigationItems} />
          <Dropdown items={profileItems.items}>
            <HeaderProfile />
          </Dropdown>
        </div>
      </div>
    </header>
  );
}

export default Header;