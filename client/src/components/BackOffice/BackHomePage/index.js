import React from 'react';
import 'animate.css/animate.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const BackHommePage = () => (
  <div className="backHomePage">
    <h2 className="backHomePage__titre">Back-Office VB</h2>
    <p className="backHomePage__text">Bienvenue sur le Back-office !</p>
    <p className="backHomePage__text">Vous pouvez ajouter, modifier et supprimer les produits que vous souhaitez afficher sur votre site ici !</p>
    <p className="backHomePage__text">Cette partie du site n'est disponible que sur ordinateur, merci de ne pas l'utiliser sur téléphone. </p>
    <Link to="/">
      <button type="button" className="backHomePage__button animate__animated animate__backInUp">
        Retour à l'accueil
      </button>
    </Link>
  </div>
);

BackHommePage.propTypes = {};

export default BackHommePage;
