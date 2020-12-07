import React from 'react';
import logo from 'src/assets/logo-fondnoir.png';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const Footer = () => (
  <>
    <div className="footer">
      <div className="footer__top">
        <img src={logo} alt="" className="footer__logo" />
        <ul className="footer__menu">
          <li className="footer__menu__list">Accueil</li>
          <li className="footer__menu__list">Meuble</li>
          <li className="footer__menu__list">Luminaire</li>
          <li className="footer__menu__list">Décoration</li>
          <li className="footer__menu__list">Contact</li>
        </ul>
      </div>
      <div className="footer__bottom">
        <p>Informations sur l'entreprise</p>
        <p>van.den.broeck.b@hotmail.com</p>
      </div>
      <div className="footer__socialMedia">
        <Icon name="instagram" size="big" />
        <Icon name="facebook f" size="big" />
        <Icon name="pinterest p" size="big" />
      </div>
    </div>
    <div className="footer__copyright">
      <p>&copy;    VB - Tous    droits    réservés</p>
      <p>Site    web   par    Antoine    Decamps</p>
    </div>
  </>
);

Footer.propTypes = {};

export default Footer;
