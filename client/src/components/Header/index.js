/* eslint-disable import/no-unresolved */
import React from 'react';
import BurgerMenu from 'src/containers/BurgerMenu';
import logo from 'src/assets/logo.png';
import { Icon } from 'semantic-ui-react';

import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1025px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  return (
    <header className="header">
      {isTabletOrMobile && (
        <nav className="header__mobile">
          <BurgerMenu />
          <img src={logo} className="header__logo" alt="logo" />
          <div className="header__socialMedia">
            <Icon name="instagram" />
            <Icon name="facebook f" />
            <Icon name="pinterest p" />
          </div>
        </nav>
      )}
      {isBigScreen && (
        <nav className="header__desktop">
          <div className="header__desktop__firstSection">
            <p>Langue</p>
            <p>L'art du design, création de mobilier unique</p>
            <div className="header__socialMedia">
              <Icon name="instagram" />
              <Icon name="facebook f" />
              <Icon name="pinterest p" />
            </div>
          </div>
          <div className="header__desktop__secondSection">
            <div className="header__box__left">
              <BurgerMenu />
            </div>
            <img src={logo} className="header__desktop__logo" alt="logo" />
            <div className="header__desktop__contact">
              <p className="header__desktop__contact__left">Vous voulez plus d'informations ?</p>
              <div className="header__box__right">
                <p className="header__desktop__contact__right">Me contacter</p>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

Header.propTypes = {};

export default Header;
