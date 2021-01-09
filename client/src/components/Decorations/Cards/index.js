import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const Cards = ({ name, id, date, category, description, image, hauteur, largeur, bois }) => (
  <div className="cards">
    <section className="cards__firstSection">
      <img src={image} alt="" className="cards__image" />
    </section>
    <section className="cards__secondSection">
      <h2 className="cards__title">{name}</h2>
      <p className="cards__category">{category}</p>
    </section>
    <section className="cards__thirdSection__deco">
      <p className="cards__thirdSection__deco__descriptif">{description}</p>
      <ul className="cards__dimension">
        <table className="cards__thirdSection__deco__table">
          <tr key="array">
            <th>Hauteur</th>
            <td>{`${hauteur} CM`}</td>
          </tr>
          <tr key="array">
            <th>Largeur</th>
            <td>{`${largeur} CM`}</td>
          </tr>
        </table>
      </ul>
    </section>
    <section className="cards__fourthSection__luminaire">
      <div className="cards__fourthSection__luminaire__div">
        <p className="cards__fourthSection__luminaire__title">création</p>
        <p className="cards__fourthSection__luminaire__data">{date}</p>
      </div>
      <div className="cards__fourthSection__luminaire__div">
        <p className="cards__fourthSection__luminaire__title">bois</p>
        <p className="cards__fourthSection__luminaire__data">{bois}</p>
      </div>
    </section>
  </div>
);

Cards.propTypes = {};

export default Cards;
