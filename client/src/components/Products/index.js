import React from 'react';
import PropTypes from 'prop-types';

import Cards from 'src/components/Products/Cards';

import './styles.scss';

const Products = ({ product, name, redirectURL }) => {
  const Card = product.map(({ titre, description, image }) => (
    <Cards
      name={titre}
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
