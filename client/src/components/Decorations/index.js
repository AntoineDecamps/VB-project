import React from 'react';
import PropTypes from 'prop-types';

import Cards from 'src/components/Decorations/Cards';

import './styles.scss';

const Decorations = ({ product, name, redirectURL }) => {
  let cardToDisplay;
  if (product.length > 0) {
    cardToDisplay = () => {
      const Card = product.map(({ titre, date, category, description, image }) => (
        <Cards
          name={titre}
          date={date}
          category={category}
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
  }
  else {
    cardToDisplay = () => (
      <p>Aucun produit lié à la décoration n'est encore affiché </p>
    );
  }
  return (
    <div className="products">
      {cardToDisplay()}
    </div>
  );
};

Decorations.propTypes = {};

export default Decorations;
