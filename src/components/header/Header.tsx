import * as React from 'react';

import Dropdown from '../dropdown';
import InputSearch from '../InputSearch';
import HeaderProfile from './headerProfile';

import './style/index.css';

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
            <Dropdown items={ [{a: 'google.com', name: 'google'}] }>
              <HeaderProfile/>
            </Dropdown>
            
          </div>
        </div>
      </header>
    );
  }
}

export default Header;