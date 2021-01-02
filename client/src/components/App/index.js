/* eslint-disable import/no-unresolved */
// == Import npm
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'src/components/Header';
// import DropDown from 'src/containers/Dropdown';
import DropdownTest from 'src/containers/DropdownTest';
import HomePage from 'src/components/HomePage';
import Contact from 'src/components/Contact';
import Products from 'src/components/Products';
import Luminaires from 'src/components/Luminaires';
import Decorations from 'src/components/Decorations';
import BackOffice from 'src/components/BackOffice';
import Footer from 'src/components/Footer';

// import 'semantic-ui-css/semantic.min.css';

// == Import
import './styles.css';

// == Composant
const App = ({ dropdown, meubles, luminaires, decorations, getMeubles, getLuminaires, getDecorations }) => {
  useEffect(() => {
    getMeubles();
    getLuminaires();
    getDecorations();
  }, []);
  return (
    <div className="app">
      {/* <Switch> */}
      <Header />
      {dropdown && (
        <DropdownTest />
      )}
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/meubles">
        <Products
          name="Meubles"
          redirectURL="meubles"
          product={meubles}
        />
      </Route>
      <Route exact path="/luminaires">
        <Luminaires
          name="Luminaires"
          redirectURL="luminaires"
          product={luminaires}
        />
      </Route>
      <Route exact path="/decorations">
        <Decorations
          name="Décorations"
          redirectURL="decorations"
          product={decorations}
        />
      </Route>
      <Route exact path="/admin">
        <BackOffice />
      </Route>
      <Footer />
      {/* </Switch> */}
    </div>
  );
};

// == Export
export default App;
