import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.scss';
import * as Yup from 'yup';
import swal from 'sweetalert';
import avatar from './avatar-alt.png';

const LoginForm = ({ handleLogin }) => {
  const validationSchema = Yup.object({
    email: Yup.string().email().required('Veuillez entrer un email valide'),
    password: Yup.string().required('Veuillez entrer un mot de passe'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // eslint-disable-next-line max-len
    onSubmit: (values) => {
      // const token = localStorage.getItem('token');
      axios.post('https://vb-creation-api.herokuapp.com/api/login',
        {
          email: values.email,
          password: values.password,
        }, {
          headers: {
            'content-type': 'application/json',
          },
        })
        .then((response) => {
          // console.log(response);
        })
        .then(() => {
          handleLogin();
        })
        .then(() => {
          swal('Connexion réussie !', '', 'success');
        })
        .catch((error) => {
          console.log(error);
          swal('Une erreur est survenue', 'Réessayez', 'error');
        });
    },
    validationSchema,
  });
  return (
    <div className="login">
      <form className="login__form" onSubmit={formik.handleSubmit}>
        <div className="login__title">
          <h1 className="login__title__h">Connexion</h1>
          <img src={avatar} alt="" className="login__title__image" />
        </div>
        <label htmlFor="image" className="login__label">Email
          <input type="text" placeholder="Veuillez entrer un email" id="email" name="email" className="login__input" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
          {formik.touched.email && formik.errors.email ? <div className="form__errors">{formik.errors.email}</div> : null}
        </label>

        <label htmlFor="image" className="login__label">Mot de passe
          <input type="password" placeholder="Veuillez entrer un mot de passe" id="password" name="password" className="login__input" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
          {formik.touched.password && formik.errors.password ? <div className="form__errors">{formik.errors.password}</div> : null}
        </label>

        <button type="submit" className="login__button">
          Envoyer
        </button>
        <Link to="/">
          <button type="button" className="login__button2 animate__animated animate__backInUp">
            Retour à l'accueil
          </button>
        </Link>
      </form>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
