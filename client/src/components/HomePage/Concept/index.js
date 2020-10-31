import React from 'react';
import Parallax from 'react-rellax';
import 'animate.css/animate.css';

import mainImage from 'src/components/HomePage/Concept/test.jpg';
import Logo from 'src/assets/logo-white.png';
import PropTypes from 'prop-types';

import './styles.scss';

const Concept = () => (
  <section className="concept">
    <Parallax speed={2}>
      <div className="concept__mainTitle">
        <h2 className="concept__mainText">Un homme, un savoir-faire.</h2>
        <p className="concept__mainText">Benoit Van den Broeck, menuisier artisan.</p>
      </div>
    </Parallax>
    <div className="concept__mainImage">
      {/* <img src={mainImage} alt="mainImage" className="concept__mainImage" /> */}
      <Parallax speed={1}>
        <img src={Logo} alt="logo" className="concept__logo" />
      </Parallax>
    </div>
    <div className="concept__topLine" />
    <div className="concept__explanation">
      <h3 className="concept__explanation__title animated">Une création sur-mesure</h3>
      <p className="concept__explanation__text animate__animated animate__bounce">Nous réalisons en collaboration avec le client des pièces qui lui ressembleront au maximum et s'intégreront au mieux dans son habitat</p>
    </div>
    <div className="concept__bottomLine" />
  </section>
);

Concept.propTypes = {};

export default Concept;
