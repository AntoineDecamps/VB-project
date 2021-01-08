import React from 'react';
import PropTypes from 'prop-types';

import Cards from 'src/components/Products/Cards';

import './styles.scss';

const Products = ({ product, name, redirectURL }) => {
  let cardToDisplay;
  if (product.length > 0) {
    cardToDisplay = () => {
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

Products.propTypes = {};

export default Products;
