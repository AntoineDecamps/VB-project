import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const BurgerMenu = ({ handleMenu, open }) => (
  <div className="burgerMenu">
    <Icon onClick={handleMenu} name="bars" size="big" />
    <p className="burgerMenu__text">Menu</p>
  </div>
);

BurgerMenu.propTypes = {};

export default BurgerMenu;
