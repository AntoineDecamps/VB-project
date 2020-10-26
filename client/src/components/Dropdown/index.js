import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const DrompDown = () => (
  <div className="dropdown">
    <ul>
      <li className="dropdown__list">Accueil</li>
      <li className="dropdown__list">Contact</li>
      <li className="dropdown__list">Meubles</li>
      <li className="dropdown__list">Luminaires</li>
      <li className="dropdown__list">Décorations</li>
    </ul>
  </div>
);

DrompDown.propTypes = {};

export default DrompDown;
