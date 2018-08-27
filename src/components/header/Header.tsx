import * as React from 'react';

import Dropdown from '../dropdown';
import InputSearch from '../InputSearch';
import HeaderProfile from './headerProfile';

import './style/index.css';

import profileItems from '../../constants/profilePopupMenu';

class Header extends React.Component {
  public render() {
    return(
      <header className="site-header">
        <div className="wrapper">
          <div className="site-header__container">
            <div className="site-header__logo">
              <a href="">oxu</a>
            </div>
            <InputSearch className="site-header__input"/>
            <Dropdown items={ profileItems.items }>
              <HeaderProfile/>
            </Dropdown>
            
          </div>
        </div>
      </header>
    );
  }
}

export default Header;