import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const SideBar = ({ handleLogout }) => (
  <div className="sideBar">
    <div className="sideBar__top">
      <div className="sideBar__top__icon">
        <Icon circular inverted name="users" size="big" />
      </div>
      <div className="sideBar__top__information">
        <p className="sideBar__text">Bonjour Benoit !</p>
        <button
          type="button"
          className="sideBar__button"
          onClick={handleLogout}
        >
          Se déconnecter
        </button>
      </div>
    </div>
    <div className="sideBar__nav">
      <NavLink exact to="/admin">
        <li className="sideBar__nav__link">Accueil</li>
      </NavLink>
      <NavLink exact to="/admin/meubles">
        <li className="sideBar__nav__link">Meubles</li>
      </NavLink>
      <NavLink exact to="/admin/luminaires">
        <li className="sideBar__nav__link">Luminaires</li>
      </NavLink>
      <NavLink exact to="/admin/decorations">
        <li className="sideBar__nav__link">Décorations</li>
      </NavLink>
    </div>
  </div>
);

SideBar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  pseudo: PropTypes.string,
};

SideBar.defaultProps = {
  pseudo: '',
};

export default SideBar;
