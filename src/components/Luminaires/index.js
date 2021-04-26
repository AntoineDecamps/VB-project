import React from 'react';
import PropTypes from 'prop-types';

import Cards from 'src/components/Luminaires/Cards';

import './styles.scss';

const Luminaires = ({ product, name, redirectURL }) => {
  let cardToDisplay;
  if (product.length > 0) {
    cardToDisplay = () => {
      const Card = product.map(({ titre, id, date, category, hauteur, diametre, bois, description, image }) => (
        <Cards
          name={titre}
          date={date}
          category={category}
          hauteur={hauteur}
          diametre={diametre}
          bois={bois}
          description={description}
          image={image}
          id={id}
        />
      ));
      return (
        <div className="products">
          <h2 className="products__title">{name}</h2>
          <p className="products__p">Retrouvez ci-dessous mes créations</p>
          <div className="products__cards">
            {Card}
          </div>
        </div>
      );
    };
  }
  else {
    cardToDisplay = () => (
      <p className="products__notFound">Aucun produit lié à cette catégorie n'est encore affiché </p>
    );
  }
  return (
    <div className="product">
      {cardToDisplay()}
    </div>
  );
};

Luminaires.propTypes = {};

export default Luminaires;
