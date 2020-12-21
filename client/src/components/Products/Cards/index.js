import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Cards = ({ name, description, image }) => (
  <div className="cards">
    <section className="cards__firstSection">
      <img src={image} alt="" className="cards__image" />
    </section>
    <section className="cards__secondSection">
      <h2 className="cards__title">{name}</h2>
      <p className="cards__category">Table basse</p>
    </section>
    <section className="cards__thirdSection">
      <p className="cards__thirdSection__descriptif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum nam velit fugiat. Sapiente, velit ullam odio explicabo ratione aspernatur consequuntur impedit repellat ipsam a?</p>
      <ul className="cards__dimension">
        <li className="cards__dimension__li">Hauteur : 55cm</li>
        <li className="cards__dimension__li">Longeur : 45cm</li>
        <li className="cards__dimension__li">Largeur : 65cm</li>
      </ul>
    </section>
    <section className="cards__fourthSection">
      <div className="cards__fourthSection__div">
        <p className="cards__fourthSection__title">création</p>
        <p className="cards__fourthSection__data">27/02/2020</p>
      </div>
      <div className="cards__fourthSection__div">
        <p className="cards__fourthSection__title">bois</p>
        <p className="cards__fourthSection__data">Frêne</p>
      </div>
      <div className="cards__fourthSection__div">
        <p className="cards__fourthSection__title">pied</p>
        <p className="cards__fourthSection__data">Metal de récupération</p>
      </div>
    </section>
  </div>
);

Cards.propTypes = {};

export default Cards;
