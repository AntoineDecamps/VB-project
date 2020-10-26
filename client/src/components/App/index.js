// == Import npm
import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// == Import
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <h1>VB Project</h1>
    <Header />
    <Footer />
  </div>
);

// == Export
export default App;
