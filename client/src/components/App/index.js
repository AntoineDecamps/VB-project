/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Footer';

// == Import
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <HomePage />
    <Footer />
  </div>
);

// == Export
export default App;
