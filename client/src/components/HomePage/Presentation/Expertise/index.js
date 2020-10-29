import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Expertise = () => (
  <div className="expertise">
    <h3 className="expertise__title">Mon Expertise</h3>
    <p className="expertise__text">
      Mon domaine d'expertise s'étend à toutes sortes de meubles aussi bien d'intérieurs que d'extérieurs, aux luminaires ainsi qu'à certains types de décorations d'intérieures comme les miroirs.
    </p>
    <p className="expertise__button">Découvrez mes créations</p>
  </div>
);

Expertise.propTypes = {};

export default Expertise;
