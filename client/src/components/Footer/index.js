import React from 'react';
import logo from 'src/assets/logo-fondnoir.png';
import { Icon } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const Footer = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 900px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' });
  return (
    <>
      {isTabletOrMobile && (
        <div className="footer">
          <div className="footer__top">
            <img src={logo} alt="" className="footer__logo" />
            <ul className="footer__menu">
              <NavLink to="/" exact>
                <li className="footer__menu__list">Accueil</li>
              </NavLink>
              <NavLink to="/contact" exact>
                <li className="footer__menu__list">Contact</li>
              </NavLink>
              <NavLink to="/meuble" exact>
                <li className="footer__menu__list">Meuble</li>
              </NavLink>
              <NavLink to="/luminaires" exact>
                <li className="footer__menu__list">Luminaire</li>
              </NavLink>
              <NavLink to="/decorations" exact>
                <li className="footer__menu__list">Décoration</li>
              </NavLink>
            </ul>
          </div>
          <div className="footer__bottom">
            <div className="footer__info">
              <Icon name="mail" size="large" />
              <p className="footer__info__p">van.den.broeck.b@hotmail.com</p>
            </div>
            <div className="footer__info">
              <Icon name="phone" size="large" />
              <p className="footer__info__p">0625  85 95 96 95</p>
            </div>
          </div>
          <div className="footer__socialMedia">
            <Icon name="instagram" size="big" />
            <Icon name="pinterest p" size="big" />
          </div>
        </div>
      )}
      {isBigScreen && (
        <div className="footer">
          <div className="footer__top">
            <img src={logo} alt="" className="footer__logo" />
            <div className="footer__bigScreen">
              <ul className="footer__menu">
                <NavLink to="/meuble">
                  <li className="footer__menu__list__main">Meubles</li>
                </NavLink>
                <NavLink to="/banc">
                  <li className="footer__menu__list">Banc</li>
                </NavLink>
                <NavLink to="/console">
                  <li className="footer__menu__list">Console</li>
                </NavLink>
                <NavLink to="/etagere">
                  <li className="footer__menu__list">Etagère</li>
                </NavLink>
                <NavLink to="/meubleTV">
                  <li className="footer__menu__list">Meuble TV</li>
                </NavLink>
                <NavLink to="/table">
                  <li className="footer__menu__list">Table</li>
                </NavLink>
                <NavLink to="/table-appoint">
                  <li className="footer__menu__list">Table d'appoint</li>
                </NavLink>
                <NavLink to="/table-salon">
                  <li className="footer__menu__list">Table de salon</li>
                </NavLink>
              </ul>
              <ul className="footer__menu">
                <NavLink to="/luminaires">
                  <li className="footer__menu__list__main">Luminaires</li>
                </NavLink>
                <NavLink to="/applique-murale">
                  <li className="footer__menu__list">Applique murale</li>
                </NavLink>
                <NavLink to="/lampadaire">
                  <li className="footer__menu__list">Lampadaire</li>
                </NavLink>
                <NavLink to="/lampe-de-table">
                  <li className="footer__menu__list">Lampe de table</li>
                </NavLink>
                <NavLink to="/suspension">
                  <li className="footer__menu__list">Suspension</li>
                </NavLink>
              </ul>
              <ul className="footer__menu">
                <NavLink to="/decorations">
                  <li className="footer__menu__list__main">Décorations</li>
                </NavLink>
                <NavLink to="/miroire">
                  <li className="footer__menu__list">Miroire</li>
                </NavLink>
                <NavLink to="/cadre">
                  <li className="footer__menu__list">Cadre</li>
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom__left">
              <div className="footer__info">
                <Icon name="mail" size="large" />
                <p className="footer__info__p">van.den.broeck.b@hotmail.com</p>
              </div>
              <div className="footer__info">
                <Icon name="phone" size="large" />
                <p className="footer__info__p">0625  85 95 96 95</p>
              </div>
            </div>
            <div className="footer__bottom__center">
              <p>&copy;    VB CREATION- Tous    droits    réservés</p>
            </div>
            <div className="footer__bottom__right">
              <NavLink to="/">
                <li className="footer__menu__list__main">Retour à l'accueil</li>
              </NavLink>
              <NavLink to="/contact">
                <div className="header__box__right">
                  <p className="header__desktop__contact__right">Me contacter</p>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="footer__socialMedia">
            <Icon name="instagram" size="big" />
            <Icon name="pinterest p" size="big" />
          </div>
        </div>
      )}
      <div className="footer__copyright">
        <p>Site    web   par    Antoine    Decamps</p>
      </div>
    </>
  );
};

Footer.propTypes = {};

export default Footer;
