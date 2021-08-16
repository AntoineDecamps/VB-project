import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import axios from 'axios';
import { redirectToHomepage } from 'src/selectors';
import './styles.scss';
import * as Yup from 'yup';
import swal from 'sweetalert';

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Veuillez entrer votre nom'),
    email: Yup.string().required('Veuillez préciser la catégorie du produit'),
    subject: Yup.string().required('Veuillez préciser un sujet'),
    message: Yup.string().required('Veuillez indiquer votre message'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    // eslint-disable-next-line max-len
    onSubmit: (values) => {
      axios.post('https://vb-creation-api.herokuapp.com/contact',
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((response) => {
          // console.log(response);
        })
        .then(() => {
          swal('Votre message bien été envoyé !', '', 'success');
        })
        .then(() => {
          redirectToHomepage();
        })
        .catch((error) => {
          console.log(error);
          swal('Oups, une erreur est survenue lors de l\'envoie de votre message', 'Réessayez !', 'error');
        });
    },
    validationSchema,
  });
  console.log('Form errors', formik.errors);
  return (
    <div className="contact">
      <p className="contact__title">Contactez moi !</p>
      <p className="contact__p">Pour toutes questions relatives à une création présente sur le site ou si vous souhaitez faire appel à mes services pour un projet sur-mesure, n'hésitez pas à me contacter ! </p>
      <div className="contact__message">
        <p className="contact__message__p">
          Important : ce formulaire ne fonctionne pas pour le moment !
        </p>
        <p className="contact__message__p">
          Si Vous souhaitez prendre contact, veuillez envoyer un email à l'adresse suivante : 
          <br /> <span className="contact__message__email">
            vb-design-conception@hotmail.com 
          </span> 
          <br /> sans passer par ce formulaire s'il-vous-plait ! 

        </p>
      </div>
      <form className="contact__form" onSubmit={formik.handleSubmit}>
        <input type="text" placeholder="Nom" id="name" name="name" className="contact__form__input" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
        {formik.touched.name && formik.errors.name ? <div className="form__errors">{formik.errors.name}</div> : null}

        <input type="text" id="email" name="email" placeholder="Email" className="contact__form__input" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
        {formik.touched.email && formik.errors.email ? <div className="form__errors">{formik.errors.email}</div> : null}

        <input type="text" placeholder="Sujet" id="subject" name="subject" className="contact__form__input" onChange={formik.handleChange} value={formik.values.subject} onBlur={formik.handleBlur} />
        {formik.touched.subject && formik.errors.subject ? <div className="form__errors">{formik.errors.subject}</div> : null}

        <textarea id="message" name="message" placeholder="Message" className="contact__form__input__message" onChange={formik.handleChange} value={formik.values.message} onBlur={formik.handleBlur} />
        {formik.touched.message && formik.errors.message ? <div className="form__errors">{formik.errors.message}</div> : null}

        <button type="submit" className="contact__form__button">
          Envoyer
        </button>
      </form>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
