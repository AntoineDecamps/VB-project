import React from 'react';
import PropTypes from 'prop-types';

import Cards from 'src/components/Luminaires/Cards';

import './styles.scss';

const Luminaires = ({ product, name, redirectURL }) => {
  const Card = product.map(({ titre, date, category, hauteur, diametre, bois, description, image }) => (
    <Cards
      name={titre}
      date={date}
      category={category}
      hauteur={hauteur}
      diametre={diametre}
      bois={bois}
      description={description}
      image={image}
    />
  ));
  return (
    <div className="products">
      {Card}
    </div>
  );
};

Luminaires.propTypes = {};

export default Luminaires;
