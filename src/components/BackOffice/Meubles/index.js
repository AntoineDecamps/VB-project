import React from 'react';

import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DeleteModal from 'src/containers/DeleteModal';
// import { getSlugFromName } from 'src/selectors';
import './styles.scss';

const Meubles = ({ products, name, url, open, openModal, closeModal }) => {
  const tableInformation = products.map((product) => (
    <div className="displayProduct">
      <div className="displayProduct__div">
        <h2 className="displayProduct__titre">{product.titre}</h2>
        <img className="displayProduct__image" src={product.image} alt="" />
      </div>
      <table className="displayProduct__table">
        <tr key="array">
          <th displayProduct__th>Nom</th>
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
          <th>Longueur</th>
          <td>{product.longueur}</td>
        </tr>
        <tr>
          <th>Largeur</th>
          <td>{product.largeur}</td>
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
          <th>Pied</th>
          <td>{product.pied}</td>
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
          <th>Image Secondaire 1</th>
          <td>{product.image1}</td>
        </tr>
        <tr>
          <th>Image Secondaire 2</th>
          <td>{product.image2}</td>
        </tr>
        <tr>
          <th>Image Secondaire 3</th>
          <td>{product.image3}</td>
        </tr>
        <tr>
          <th>Modifier</th>
          <td className="displayProduct__table__lastChild">
            <Modal
              trigger={<button type="button" className="displayProduct__button">Modifier</button>}
              header="Que voulez-vous faire ?"
              content="Vous pouvez modifier les informations sur le produit ou le supprimer !"
              actions={[(
                <Link exact to={`/admin/meuble/${product.id}`}>
                  <Button color="yellow">Modifier</Button>
                </Link>
              ),
              (<DeleteModal
                id={product.id}
                apiURL="meuble"
                redirect="meubles"
              />),
              (
                <Link exact to="/admin/meubles">
                  <Button color="blue">Retour sur la liste des meubles</Button>
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

Meubles.propTypes = {
  products: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Meubles;
