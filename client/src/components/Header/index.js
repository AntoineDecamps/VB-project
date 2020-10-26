/* eslint-disable import/no-unresolved */
import React from 'react';
import BurgerMenu from 'src/containers/BurgerMenu';
import logo from 'src/assets/logo.png';

import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = () => {
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  return (
    <div className="header">
      {isBigScreen && (
        <p>DESKTOP</p>
      )}
      {isTabletOrMobile && (
        <div className="header__mobile">
          <BurgerMenu />
          <img src={logo} className="header__logo" alt="logo" />
        </div>
      )}
    </div>
  );
};

Header.propTypes = {};

export default Header;
