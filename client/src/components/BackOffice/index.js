import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import BackHomePage from 'src/components/BackOffice/BackHomePage';
import LoginForm from 'src/containers/LoginForm';
import Sidebar from 'src/containers/SideBar';
import Meubles from 'src/components/BackOffice/Meubles';
import Luminaires from 'src/components/BackOffice/Luminaires';
import Decorations from 'src/components/BackOffice/Decorations';

import AddMeuble from 'src/components/BackOffice/Meubles/AddMeuble';
import AddLuminaire from 'src/components/BackOffice/Luminaires/AddLuminaire';
import AddDecoration from 'src/components/BackOffice/Decorations/AddDecoration';

import ModalMeuble from 'src/containers/ModalMeuble';
import ModalLuminaire from 'src/containers/ModalLuminaire';
import ModalDecoration from 'src/containers/ModalDecoration';

import './styles.scss';

const BackOffice = ({ meubles, luminaires, decorations, isLoged }) => (
  <div className="backOffice">
    <Switch>
      <Route exact path="/admin">
        {isLoged && (
          <>
            <BackHomePage />
            <Sidebar />
          </>
        )}
        {!isLoged && (
          <>
            <LoginForm />
          </>
        )}
      </Route>
      {/* Route affichage meubles */}
      <Route exact path="/admin/meubles">
        {isLoged && (
          <>
            <Sidebar />
            <Meubles
              products={meubles}
              name="meubles"
              url="meuble"
            />
          </>
        )}
        {!isLoged && (
          <>
            <LoginForm />
          </>
        )}
      </Route>
      {/* Route affichage Luminaires */}
      <Route exact path="/admin/luminaires">
        {isLoged && (
          <>
            <Sidebar />
            <Luminaires
              products={luminaires}
              name="luminaires"
              url="luminaire"
            />
          </>
        )}
        {!isLoged && (
          <>
            <LoginForm />
          </>
        )}
      </Route>
      {/* Route affichage décorations */}
      <Route exact path="/admin/decorations">
        {isLoged && (
          <>
            <Sidebar />
            <Decorations
              products={decorations}
              name="decorations"
              url="décoration"
            />
          </>
        )}
        {!isLoged && (
          <>
            <LoginForm />
          </>
        )}
      </Route>

      <Route exact path="/admin/ajouter-meuble">
        <Sidebar />
        <AddMeuble />
      </Route>
      <Route exact path="/admin/ajouter-luminaire">
        <Sidebar />
        <AddLuminaire />
      </Route>
      <Route exact path="/admin/ajouter-décoration">
        <Sidebar />
        <AddDecoration />
      </Route>
      <Route
        exact
        path="/admin/meuble/:slug"
        component={({ match }) => (
          <ModalMeuble
            slug={match.params.slug}
          />
        )}
      />
      <Route
        exact
        path="/admin/luminaire/:slug"
        component={({ match }) => (
          <ModalLuminaire
            slug={match.params.slug}
          />
        )}
      />
      <Route
        exact
        path="/admin/decoration/:slug"
        component={({ match }) => (
          <ModalDecoration
            slug={match.params.slug}
          />
        )}
      />
    </Switch>
  </div>
);

BackOffice.propTypes = {};

export default BackOffice;
