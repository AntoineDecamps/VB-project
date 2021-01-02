import React from 'react';
import PropTypes from 'prop-types';

import Cards from 'src/components/Products/Cards';

import './styles.scss';

const Products = ({ product, name, redirectURL }) => {
  const Card = product.map(({ titre, date, category, hauteur, longueur, largeur, diametre, bois, pied, description, image }) => (
    <Cards
      name={titre}
      date={date}
      category={category}
      hauteur={hauteur}
      longueur={longueur}
      largeur={largeur}
      diametre={diametre}
      bois={bois}
      pied={pied}
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

Products.propTypes = {};

export default Products;
