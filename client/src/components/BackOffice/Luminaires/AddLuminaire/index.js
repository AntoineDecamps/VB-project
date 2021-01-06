import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import axios from 'axios';
import { redirectToLumainaires } from 'src/selectors';
import './styles.scss';
import * as Yup from 'yup';
import swal from 'sweetalert';

const AddLuminaire = () => {
  // formik hook takes an object as parameter and return an object that we stock in a variable
  // which contains usefull properties and methods that we can use on this form to :
  // Managing the form state
  // Handling form submission
  // Validation and error messages
  // properties stocked in the initialValues should correspond to attribute name of the input
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
      titre: '',
      category: '',
      description: '',
      image: '',
      hauteur: '',
      diametre: '',
      date: '',
      bois: '',
    },
    // eslint-disable-next-line max-len
    onSubmit: (values) => {
      // const token = localStorage.getItem('token');
      axios.post('http://localhost:5050/api/luminaire',
        {
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
          swal('Nouveau luminaire ajouté !', '', 'success');
        })
        .catch((error) => {
          console.log(error);
          swal('Action non autorisée !', 'Vous n\'avez pas les droits pour faire ceci !', 'error');
        });
    },
    validationSchema,
  });
  console.log('Form errors', formik.errors);
  return (
    <div className="addMeuble">
      <h1 className="addMeuble__title">Ajouter un luminaire</h1>
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

        <label htmlFor="image" className="add__label">Type de bois
          <input type="text" placeholder="Veuillez entrer un type de bois" id="bois" name="bois" className="add__input" onChange={formik.handleChange} value={formik.values.bois} onBlur={formik.handleBlur} />
          {formik.touched.bois && formik.errors.bois ? <div className="form__errors">{formik.errors.bois}</div> : null}
        </label>

        <button type="submit" className="add__button">
          Envoyer
        </button>
      </form>
    </div>
  );
};

AddLuminaire.propTypes = {};

export default AddLuminaire;
