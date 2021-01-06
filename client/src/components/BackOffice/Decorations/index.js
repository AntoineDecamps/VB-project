import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getSlugFromName } from 'src/selectors';
import './styles.scss';

const Luminaires = ({ products, name, url }) => {
  const tableInformation = products.map((product) => (
    <div className="displayProduct">
      <table className="produits__table">
        <tr key="array">
          <th>Nom</th>
          <td>{product.titre}</td>
        </tr>
        <tr>
          <th>Catégorie</th>
          <td>{product.category}</td>
        </tr>
        <tr>
          <th>Hauteur</th>
          <td>{product.hauteur}</td>
        </tr>
        <tr>
          <th>Diamètre</th>
          <td>{product.diametre}</td>
        </tr>
        <tr>
          <th>Date</th>
          <td>{product.date}</td>
        </tr>
        <tr>
          <th>Bois</th>
          <td>{product.bois}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{product.description}</td>
        </tr>
        <tr>
          <th>Image principale</th>
          <td>{product.image}</td>
        </tr>
      </table>
      <img className="displayProduct__image" src={product.image} alt=""/>
    </div>
  ));
  return (
    <div className="produits">
      <div className="produits__flexButton">
        <Link to={`/admin/ajouter-${url}`}>
          <button type="button" className="produits__button">
            {`Ajouter un ${url}`}
          </button>
        </Link>
      </div>
      <h2 className="produits__title">{`Liste des ${name} en ligne`}</h2>
      {tableInformation}
    </div>
  );
};

Luminaires.propTypes = {
  products: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Luminaires;
