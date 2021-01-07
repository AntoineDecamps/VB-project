import React from 'react';

import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DeleteModal from 'src/containers/DeleteModal';
// import { getSlugFromName } from 'src/selectors';
import './styles.scss';

const Luminaires = ({ products, name, url }) => {
  const tableInformation = products.map((product) => (
    <div className="displayProduct">
      <div className="displayProduct__div">
        <h2 className="displayProduct__titre">{product.titre}</h2>
        <img className="displayProduct__image" src={product.image} alt="" />
      </div>
      <table className="displayProduct__table">
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
        <tr>
          <th>Modifier</th>
          <td className="displayProduct__table__lastChild">
            <Modal
              trigger={<button type="button" className="displayProduct__button">Modifier</button>}
              header="Que voulez-vous faire ?"
              content="Vous pouvez modifier les informations sur le produit ou le supprimer !"
              actions={[(
                <Link exact to={`/admin/luminaire/${product.id}`}>
                  <Button color="yellow">Modifier</Button>
                </Link>
              ),
              (<DeleteModal
                id={product.id}
                apiURL="meuble"
                redirect="meubles"
              />),
              (
                <Link exact to="/admin/luminaires">
                  <Button color="blue">Retour sur la liste des luminaires</Button>
                </Link>
              ),
              ]}
            />
          </td>
        </tr>
      </table>
    </div>
  ));
  return (
    <div className="produits">
      <div className="produits__flexButton">
        <h2 className="produits__title">{`Liste des ${name} en ligne`}</h2>
        <Link to={`/admin/ajouter-${url}`}>
          <button type="button" className="produits__button">
            {`Ajouter un ${url}`}
          </button>
        </Link>
      </div>
      {tableInformation}
      <div className="fixMargin" />
    </div>
  );
};

Luminaires.propTypes = {
  products: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Luminaires;
