/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import DropDown from 'src/containers/Dropdown';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Footer';
import 'semantic-ui-css/semantic.min.css';

// == Import
import './styles.css';

// == Composant
const App = ({ dropdown }) => (
  <div className="app">
    <Header />
    {dropdown && (
      <DropDown />
    )}
    <HomePage />
    <Footer />
  </div>
);

// == Export
export default App;
