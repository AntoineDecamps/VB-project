/* eslint-disable import/no-unresolved */
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BurgerMenu from 'src/containers/BurgerMenu';
import logo from 'src/assets/logo.png';
import { Icon } from 'semantic-ui-react';

import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import './styles.scss';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 900px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' });
  const secondHeaderRef = useRef(null);
  const burgerMenuRef = useRef(null);
  const logoRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    gsap.timeline()
      .from(secondHeaderRef.current, { height: 0, duration: 1 })
      .from(burgerMenuRef.current, { opacity: 0, delay: 0 })
      .from(logoRef.current, { opacity: 0, delay: 0 })
      .from(contactRef.current, { opacity: 0, delay: 0 });
  }, []);
  return (
    <header className="header">
      {isTabletOrMobile && (
        <nav className="header__mobile">
          <div className="header__burgerMenu">
            <BurgerMenu />
          </div>
          <img src={logo} className="header__logo" alt="logo" />
          <div className="header__socialMedia">
            <Icon name="instagram" size="big" />
            <Icon name="pinterest p" size="big" />
          </div>
        </nav>
      )}
      {isBigScreen && (
        <nav className="header__desktop">
          <div className="header__desktop__firstSection">
            <p>Langue</p>
            <p>L'art du design, création de mobilier unique</p>
            <div className="header__desktop__socialMedia">
              <Icon name="instagram" size="large" />
              {/* <Icon name="facebook f" /> */}
              <Icon name="pinterest p" size="large" />
            </div>
          </div>
          <div className="header__desktop__secondSection" ref={secondHeaderRef}>
            <div className="header__box__left" ref={burgerMenuRef}>
              <BurgerMenu />
            </div>
            <img src={logo} className="header__desktop__logo" alt="logo" ref={logoRef} />
            <div className="header__desktop__contact" ref={contactRef}>
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
