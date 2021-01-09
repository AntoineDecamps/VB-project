import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const LuminaireDetail = ({ category, image1, image2, image3, image }) => (
  <div className="productDetail">
    <div className="productDetail__text3d">{category}</div>
    <div className="productDetail__box">
      <div className="productDetail__box__animation">
        <span Style="--i:4"><img src={image} alt="" /></span>
        <span Style="--i:1"><img src={image1} alt="" /></span>
        <span Style="--i:2"><img src={image2} alt="" /></span>
        <span Style="--i:3"><img src={image3} alt="" /></span>
      </div>
    </div>
    <Link to="/luminaires">
      <button type="button" className="productDetail__button">Retour vers les produits</button>
    </Link>
  </div>
);

LuminaireDetail.propTypes = {};

export default LuminaireDetail;
