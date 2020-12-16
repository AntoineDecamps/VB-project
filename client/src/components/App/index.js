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
import Footer from 'src/components/Footer';

// import 'semantic-ui-css/semantic.min.css';

// == Import
import './styles.css';

// == Composant
const App = ({ dropdown, getMeubles }) => {
  useEffect(() => {
    getMeubles();
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
        />
      </Route>
      <Route exact path="/luminaires">
        <Products
          name="Luminaires"
          redirectURL="luminaires"
        />
      </Route>
      <Route exact path="/decorations">
        <Products
          name="Décorations"
          redirectURL="decorations"
        />
      </Route>
      <Footer />
      {/* </Switch> */}
    </div>
  );
};

// == Export
export default App;
