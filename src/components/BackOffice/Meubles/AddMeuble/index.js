import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import axios from 'axios';
import { redirectToMeubles } from 'src/selectors';
import './styles.scss';
import * as Yup from 'yup';
import swal from 'sweetalert';

const AddMeuble = () => {
  const validationSchema = Yup.object({
    titre: Yup.string().required('Veuillez entrer un nom pour ce produit'),
    category: Yup.string().required('Veuillez préciser la catégorie du produit'),
    description: Yup.string().required('Veuillez entrer une description pour ce produit'),
    image: Yup.string().url('Veuillez entrer une URL valide').required('Veuillez préciser une image pour ce produit'),
    hauteur: Yup.number(),
    longueur: Yup.number(),
    largeur: Yup.number(),
    diametre: Yup.number(),
    date: Yup.string().required('Veuillez entrer une date de création'),
    bois: Yup.string().required('Veuillez indiquer le type de bois utilisé'),
    pied: Yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      titre: '',
      category: '',
      description: '',
      image: '',
      image1: '',
      image2: '',
      image3: '',
      hauteur: '',
      longueur: '',
      largeur: '',
      diametre: '',
      date: '',
      bois: '',
      pied: '',
    },
    // eslint-disable-next-line max-len
    onSubmit: (values) => {
      // const token = localStorage.getItem('token');
      axios.post('https://vb-creation-api.herokuapp.com/api/meuble',
        {
          titre: values.titre,
          category: values.category,
          description: values.description,
          image: values.image,
          image1: values.image1,
          image2: values.image2,
          image3: values.image3,
          hauteur: values.hauteur,
          longueur: values.longueur,
          largeur: values.largeur,
          diametre: values.diametre,
          date: values.date,
          bois: values.bois,
          pied: values.pied,
        }, {
          headers: {
            // 'X-Auth-Token': token,
            'content-type': 'application/json',
          },
        })
        .then((response) => {
          // console.log(response);
        })
        .then(() => {
          redirectToMeubles();
        })
        .then(() => {
          swal('Nouveau meuble ajouté !', '', 'success');
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
      <h1 className="addMeuble__title">Ajouter un meuble</h1>
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
            <option value="Banc" label="Banc" />
            <option value="Console" label="Console" />
            <option value="Etagere" label="Etagere" />
            <option value="Meuble TV" label="Meuble TV" />
            <option value="Table" label="Table" />
            <option value="Table d'appoint" label="Table d'appoint" />
            <option value="Table de salon" label="Table de salon" />
          </select>
          {formik.touched.category && formik.errors.category ? <div className="form__errors">{formik.errors.category}</div> : null}
        </label>

        <label htmlFor="description" className="add__label">Description
          <textarea id="description" name="description" placeholder="Veuillez entrer une description" className="add__input__description" onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} />
          {formik.touched.description && formik.errors.description ? <div className="form__errors">{formik.errors.description}</div> : null}
        </label>

        <label htmlFor="image" className="add__label">Image Principale
          <input type="text" placeholder="Veuillez entrer une url" id="image" name="image" className="add__input" onChange={formik.handleChange} value={formik.values.image} onBlur={formik.handleBlur} />
          {formik.touched.image && formik.errors.image ? <div className="form__errors">{formik.errors.image}</div> : null}
        </label>

        <label htmlFor="image1" className="add__label">Image Secondaire 1
          <input type="text" placeholder="Veuillez entrer une url" id="image1" name="image1" className="add__input" onChange={formik.handleChange} value={formik.values.image1} onBlur={formik.handleBlur} />
          {formik.touched.image1 && formik.errors.image1 ? <div className="form__errors">{formik.errors.image1}</div> : null}
        </label>

        <label htmlFor="image2" className="add__label">Image Secondaire 2
          <input type="text" placeholder="Veuillez entrer une url" id="image2" name="image2" className="add__input" onChange={formik.handleChange} value={formik.values.image2} onBlur={formik.handleBlur} />
          {formik.touched.image2 && formik.errors.image2 ? <div className="form__errors">{formik.errors.image2}</div> : null}
        </label>

        <label htmlFor="image3" className="add__label">Image Secondaire 3
          <input type="text" placeholder="Veuillez entrer une url" id="image3" name="image3" className="add__input" onChange={formik.handleChange} value={formik.values.image3} onBlur={formik.handleBlur} />
          {formik.touched.image3 && formik.errors.image3 ? <div className="form__errors">{formik.errors.image3}</div> : null}
        </label>

        <label htmlFor="hauteur" className="add__label">Hauteur
          <input type="number" placeholder="Veuillez entrer une hauteur" id="hauteur" name="hauteur" className="add__input" onChange={formik.handleChange} value={formik.values.hauteur} onBlur={formik.handleBlur} />
          {formik.touched.hauteur && formik.errors.hauteur ? <div className="form__errors">{formik.errors.hauteur}</div> : null}
        </label>

        <label htmlFor="longueur" className="add__label">Longueur
          <input type="number" placeholder="Veuillez entrer une longueur" id="longueur" name="longueur" className="add__input" onChange={formik.handleChange} value={formik.values.longueur} onBlur={formik.handleBlur} />
          {formik.touched.longueur && formik.errors.longueur ? <div className="form__errors">{formik.errors.longueur}</div> : null}
        </label>

        <label htmlFor="largeur" className="add__label">Largeur
          <input type="number" placeholder="Veuillez entrer une largeur" id="largeur" name="largeur" className="add__input" onChange={formik.handleChange} value={formik.values.largeur} onBlur={formik.handleBlur} />
          {formik.touched.largeur && formik.errors.largeur ? <div className="form__errors">{formik.errors.largeur}</div> : null}
        </label>

        <label htmlFor="diametre" className="add__label">Diamètre
          <input type="number" placeholder="Veuillez entrer un diamètre à la place de largeur et longeur" id="diametre" name="diametre" className="add__input" onChange={formik.handleChange} value={formik.values.diametre} onBlur={formik.handleBlur} />
          {formik.touched.diametre && formik.errors.diametre ? <div className="form__errors">{formik.errors.diametre}</div> : null}
        </label>

        <label htmlFor="date" className="add__label">Date de création
          <input type="date" placeholder="Veuillez entrer une date de création" id="date" name="date" className="add__input" onChange={formik.handleChange} value={formik.values.date} onBlur={formik.handleBlur} />
          {formik.touched.date && formik.errors.date ? <div className="form__errors">{formik.errors.date}</div> : null}
        </label>

        <label htmlFor="bois" className="add__label">Type de bois
          <input type="text" placeholder="Veuillez entrer un type de bois" id="bois" name="bois" className="add__input" onChange={formik.handleChange} value={formik.values.bois} onBlur={formik.handleBlur} />
          {formik.touched.bois && formik.errors.bois ? <div className="form__errors">{formik.errors.bois}</div> : null}
        </label>

        <label htmlFor="pied" className="add__label">Pied
          <input type="text" placeholder="Précisez le matériel utilisé pour le pied s'il y en a un" id="pied" name="pied" className="add__input" onChange={formik.handleChange} value={formik.values.pied} onBlur={formik.handleBlur} />
          {formik.touched.pied && formik.errors.pied ? <div className="form__errors">{formik.errors.pied}</div> : null}
        </label>

        <button type="submit" className="add__button">
          Envoyer
        </button>
      </form>
    </div>
  );
};

AddMeuble.propTypes = {};

export default AddMeuble;
