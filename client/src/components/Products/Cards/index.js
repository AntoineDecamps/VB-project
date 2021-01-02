import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Cards = ({ name, date, category, hauteur, longueur, largeur, diametre, bois, pied, description, image }) => {
  let dimensionToDisplay;
  if (longueur === 'none') {
    dimensionToDisplay = () => (
      <>
        <li className="cards__dimension__li">{`Hauteur: ${hauteur} cm`}</li>
        <li className="cards__dimension__li">{`Diamètre: ${diametre} cm`}</li>
      </>
    );
  }
  else {
    dimensionToDisplay = () => (
      <>
        <li className="cards__dimension__li">{`Hauteur: ${hauteur} cm`}</li>
        <li className="cards__dimension__li">{`Longueur: ${longueur} cm`}</li>
        <li className="cards__dimension__li">{`Largeur: ${largeur} cm`}</li>
      </>
    );
  }
  return (
    <div className="cards">
      <section className="cards__firstSection">
        <img src={image} alt="" className="cards__image" />
      </section>
      <section className="cards__secondSection">
        <h2 className="cards__title">{name}</h2>
        <p className="cards__category">{category}</p>
      </section>
      <section className="cards__thirdSection">
        <p className="cards__thirdSection__descriptif">{description}</p>
        <ul className="cards__dimension">
          {dimensionToDisplay()}
        </ul>
      </section>
      <section className="cards__fourthSection">
        <div className="cards__fourthSection__div">
          <p className="cards__fourthSection__title">création</p>
          <p className="cards__fourthSection__data">{date}</p>
        </div>
        <div className="cards__fourthSection__div">
          <p className="cards__fourthSection__title">bois</p>
          <p className="cards__fourthSection__data">{bois}</p>
        </div>
        <div className="cards__fourthSection__div">
          <p className="cards__fourthSection__title">pied</p>
          <p className="cards__fourthSection__data">{pied}</p>
        </div>
      </section>
    </div>
  );
};

Cards.propTypes = {};

export default Cards;
