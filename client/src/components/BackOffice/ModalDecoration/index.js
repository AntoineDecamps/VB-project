import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { redirectToDecorations } from 'src/selectors';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import swal from 'sweetalert';

import './styles.scss';

// this component was first initiliased for wines and cheeses but finally it will only be used
// for cheeses as we integreted an edit form in it which is specific to cheeses
// => normaly it should have been called ModalCheese
const ModalDecoration = ({
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
  largeur,
  date,
  bois,
  description,
  image,
  image1,
  image2,
  image3
}) => {
  const validationSchema = Yup.object({
    titre: Yup.string().required('Veuillez entrer un nom pour ce produit'),
    category: Yup.string().required('Veuillez préciser la catégorie du produit'),
    description: Yup.string().required('Veuillez entrer une description pour ce produit'),
    image: Yup.string().url('Veuillez entrer une URL valide').required('Veuillez préciser une image pour ce produit'),
    hauteur: Yup.number(),
    largeur: Yup.number(),
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
      largeur,
      date,
      bois,
    },
    onSubmit: (values) => {
      // const token = localStorage.getItem('token');
      axios.patch(`http://localhost:5050/api/decoration/${id}`, {
        titre: values.titre,
        category: values.category,
        description: values.description,
        image: values.image,
        hauteur: values.hauteur,
        largeur: values.largeur,
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
          redirectToDecorations();
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
      <div className="editMeuble">
        <h1 className="editMeuble__title">Modifier {titre}</h1>
        <form className="add__form" onSubmit={formik.handleSubmit}>
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
              <option value="Miroire" label="Miroire" />
              <option value="Cadre" label="Cadre" />
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

          <label htmlFor="hauteur" className="add__label">Hauteur
            <input type="text" placeholder="Veuillez entrer une hauteur" id="hauteur" name="hauteur" className="add__input" onChange={formik.handleChange} value={formik.values.hauteur} onBlur={formik.handleBlur} />
            {formik.touched.hauteur && formik.errors.hauteur ? <div className="form__errors">{formik.errors.hauteur}</div> : null}
          </label>

          <label htmlFor="largeur" className="add__label">Largeur
            <input type="text" placeholder="Veuillez entrer un diamètre à la place de largeur et longeur" id="largeur" name="largeur" className="add__input" onChange={formik.handleChange} value={formik.values.largeur} onBlur={formik.handleBlur} />
            {formik.touched.largeur && formik.errors.largeur ? <div className="form__errors">{formik.errors.largeur}</div> : null}
          </label>

          <label htmlFor="date" className="add__label">Date de création
            <input type="text" placeholder="Veuillez entrer une date de création" id="date" name="date" className="add__input" onChange={formik.handleChange} value={formik.values.date} onBlur={formik.handleBlur} />
            {formik.touched.date && formik.errors.date ? <div className="form__errors">{formik.errors.date}</div> : null}
          </label>

          <label htmlFor="bois" className="add__label">Bois
            <input type="text" placeholder="Précisez le matériel utilisé" id="bois" name="bois" className="add__input" onChange={formik.handleChange} value={formik.values.bois} onBlur={formik.handleBlur} />
            {formik.touched.bois && formik.errors.bois ? <div className="form__errors">{formik.errors.bois}</div> : null}
          </label>

          <button type="submit" className="add__button">
            Confirmer la modification
          </button>
          <button type="submit" className="add__button__bis">
            <Link exact to="/admin/luminaires">
              Retourner à la liste des luminaires
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

ModalDecoration.propTypes = {
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

export default ModalDecoration;
