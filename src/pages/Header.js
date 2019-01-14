import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {
    BOARD_1,
    BOARD_2,
    BOARD_3,
  } from './routes';

class Header extends Component {
    render() {
      return (
        <header className='main-header'>
            <div className='main-header__logo'>
                <span>Board</span>
            </div>
            <div className='main-header__links'>
                <NavLink to={BOARD_1}
                    className='main-header__links__item'
                    activeClassName='main-header__links__active'
                >
                    <span>Board 1</span>
                </NavLink>
                <NavLink to={BOARD_2}
                    className='main-header__links__item'
                    activeClassName='main-header__links__active'
                >
                    <span>Board 2</span>
                </NavLink>
                <NavLink to={BOARD_3}
                    className='main-header__links__item'
                    activeClassName='main-header__links__active'
                >
                    <span>Board 3</span>
                </NavLink>
            </div>
        </header>
      );
    }
  }
  
  export default Header;