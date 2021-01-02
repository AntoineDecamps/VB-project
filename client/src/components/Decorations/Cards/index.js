import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Cards = ({ name, date, category, description, image }) => (
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
    </section>
    <section className="cards__fourthSection__decoration">
      <div className="cards__fourthSection__decoration__div">
        <p className="cards__fourthSection__decoration__title">création</p>
        <p className="cards__fourthSection__decoration__data">{date}</p>
      </div>
    </section>
  </div>
);

Cards.propTypes = {};

export default Cards;
