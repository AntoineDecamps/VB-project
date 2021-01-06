import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { redirectToLumainaires } from 'src/selectors';
import DeleteModal from 'src/containers/DeleteModal';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import swal from 'sweetalert';

import './styles.scss';

// this component was first initiliased for wines and cheeses but finally it will only be used
// for cheeses as we integreted an edit form in it which is specific to cheeses
// => normaly it should have been called ModalCheese
const ModalLuminaire = ({
  open,
  openModal,
  closeModal,
  edit,
  openEdit,
  closeEdit,
  id,
  titre,
  category,
  hauteur,
  diametre,
  date,
  bois,
  description,
  image,
}) => {
  const validationSchema = Yup.object({
    titre: Yup.string().required('Veuillez entrer un nom pour ce produit'),
    category: Yup.string().required('Veuillez préciser la catégorie du produit'),
    description: Yup.string().required('Veuillez entrer une description pour ce produit'),
    image: Yup.string().url('Veuillez entrer une URL valide').required('Veuillez préciser une image pour ce produit'),
    hauteur: Yup.number(),
    diametre: Yup.number(),
    date: Yup.string().required('Veuillez entrer une date de création'),
    bois: Yup.string().required('Veuillez indiquer le type de bois utilisé'),
  });
  const formik = useFormik({
    initialValues: {
      titre,
      category,
      description,
      image,
      hauteur,
      diametre,
      date,
      bois,
    },
    onSubmit: (values) => {
      // const token = localStorage.getItem('token');
      axios.patch(`http://localhost:5050/api/luminaire/${id}`, {
        titre: values.titre,
        category: values.category,
        description: values.description,
        image: values.image,
        hauteur: values.hauteur,
        diametre: values.diametre,
        date: values.date,
        bois: values.bois,
      }, {
        headers: {
          // 'X-Auth-Token': token,
          'content-type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response);
        })
        .then(() => {
          redirectToLumainaires();
        })
        .then(() => {
          swal('Modification prise en compte !', '', 'success');
        })
        .catch((error) => {
          console.log(error);
          swal('Action non autorisée !', 'Vous n\'avez pas les droits pour faire ceci !', 'error');
        });
    },
    validationSchema,
  });
  return (
    <div className="modalMeuble">
      {!edit && (
        <div className="modal">
          <h2 className="modal__title">Nom</h2>
          <p className="modal__content">{titre}</p>
          <h2 className="modal__title">Catégorie</h2>
          <p className="modal__content">{category}</p>
          <h2 className="modal__title">Hauteur</h2>
          <p className="modal__content">{hauteur}</p>
          <h2 className="modal__title">Diamètre</h2>
          <p className="modal__content">{diametre}</p>
          <h2 className="modal__title">Date</h2>
          <p className="modal__content">{date}</p>
          <h2 className="modal__title">Bois</h2>
          <p className="modal__content">{bois}</p>
          <h2 className="modal__title">Description</h2>
          <p className="modal__content">{description}</p>
          <h2 className="modal__title">Image Principale</h2>
          <p className="modal__content">{image}</p>
          <Button color="yellow" onClick={() => openEdit()}>Modifier</Button>
        </div>
      )}
      {edit && (
      <div className="editMeuble">
        <h1 className="editMeuble__title">Modifier {titre}</h1>
        <form className="edit__form" onSubmit={formik.handleSubmit}>
          <label htmlFor="name" className="add__label">Titre
            <input type="text" placeholder="Le titre/numéro unique du produit" id="titre" name="titre" className="add__input" onChange={formik.handleChange} value={formik.values.titre} onBlur={formik.handleBlur} />
            {formik.touched.titre && formik.errors.titre ? <div className="form__errors">{formik.errors.titre}</div> : null}
          </label>

          <label htmlFor="category" className="add__label">Catégorie
            <select
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="" label="Choisissez une catégorie" />
              <option value="Applique Murale" label="Applique Murale" />
              <option value="Lampadaire" label="Lampadaire" />
              <option value="Lampe de table" label="Lampe de table" />
              <option value="Suspension" label="Suspension" />
            </select>
          </label>

          <label htmlFor="description" className="add__label">Description
            <textarea id="description" name="description" placeholder="Veuillez entrer une description" className="add__input__description" onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} />
            {formik.touched.description && formik.errors.description ? <div className="form__errors">{formik.errors.description}</div> : null}
          </label>

          <label htmlFor="image" className="add__label">Image
            <input type="text" placeholder="Veuillez entrer une url" id="image" name="image" className="add__input" onChange={formik.handleChange} value={formik.values.image} onBlur={formik.handleBlur} />
            {formik.touched.image && formik.errors.image ? <div className="form__errors">{formik.errors.image}</div> : null}
          </label>

          <label htmlFor="image" className="add__label">Hauteur
            <input type="text" placeholder="Veuillez entrer une hauteur" id="hauteur" name="hauteur" className="add__input" onChange={formik.handleChange} value={formik.values.hauteur} onBlur={formik.handleBlur} />
            {formik.touched.hauteur && formik.errors.hauteur ? <div className="form__errors">{formik.errors.hauteur}</div> : null}
          </label>

          <label htmlFor="image" className="add__label">Diamètre
            <input type="text" placeholder="Veuillez entrer un diamètre à la place de largeur et longeur" id="diametre" name="diametre" className="add__input" onChange={formik.handleChange} value={formik.values.diametre} onBlur={formik.handleBlur} />
            {formik.touched.diametre && formik.errors.diametre ? <div className="form__errors">{formik.errors.diametre}</div> : null}
          </label>

          <label htmlFor="image" className="add__label">Date de création
            <input type="text" placeholder="Veuillez entrer une date de création" id="date" name="date" className="add__input" onChange={formik.handleChange} value={formik.values.date} onBlur={formik.handleBlur} />
            {formik.touched.date && formik.errors.date ? <div className="form__errors">{formik.errors.date}</div> : null}
          </label>

          <label htmlFor="image" className="add__label">Pied
            <input type="text" placeholder="Précisez le matériel utilisé pour le pied s'il y en a un" id="pied" name="pied" className="add__input" onChange={formik.handleChange} value={formik.values.pied} onBlur={formik.handleBlur} />
            {formik.touched.pied && formik.errors.pied ? <div className="form__errors">{formik.errors.pied}</div> : null}
          </label>

          <button type="submit" className="add__button">
            Envoyer
          </button>
        </form>
      </div>
      )}
      <Button color="red">
        <DeleteModal
          id={id}
          apiURL="luminaire"
          redirect="luminaires"
        />
      </Button>
      <Button color="yellow" onClick={() => openEdit()}>Modifier</Button>
      <Button color="green">
        <Link to="/admin/luminaires" onClick={() => closeEdit()}>
          Retour liste des luminaires
        </Link>
      </Button>
      {/* <Button onClick={() => closeModal()} primary>
        Proceed <Icon name="chevron right" />
      </Button> */}
    </div>
  );
};

ModalLuminaire.propTypes = {
  open: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired,
  openEdit: PropTypes.func.isRequired,
  closeEdit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  milk: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ModalLuminaire;
