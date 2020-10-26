import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const BurgerMenu = ({ handleMenu, open }) => (
  <Icon onClick={handleMenu} name="bars" size="huge" />
);

BurgerMenu.propTypes = {};

export default BurgerMenu;
