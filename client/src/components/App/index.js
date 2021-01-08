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

import 'semantic-ui-css/semantic.min.css';

// == Import
import './styles.css';

// == Composant
const App = ({ dropdown, meubles, luminaires, decorations, getMeubles, getLuminaires, getDecorations }) => {
  useEffect(() => {
    getMeubles();
    getLuminaires();
    getDecorations();
  }, []);
  const banc = meubles.filter((meuble) => meuble.category === 'Banc');
  const console = meubles.filter((meuble) => meuble.category === 'Console');
  const etagere = meubles.filter((meuble) => meuble.category === 'Etagere');
  const meubleTV = meubles.filter((meuble) => meuble.category === 'Meuble tv');
  const table = meubles.filter((meuble) => meuble.category === 'Table');
  const tableAppoint = meubles.filter((meuble) => meuble.category === `Table d'appoint`);
  const tableSalon = meubles.filter((meuble) => meuble.category === 'Table de salon');

  const appliqueMurale = luminaires.filter((luminaire) => luminaire.category === 'Applique murale');
  const lampadaire = luminaires.filter((luminaire) => luminaire.category === 'Lampadaire');
  const lampeDeTable = luminaires.filter((luminaire) => luminaire.category === 'Lampe de table');
  const suspension = luminaires.filter((luminaire) => luminaire.category === 'Suspension');

  const miroire = decorations.filter((decoration) => decoration.category === 'Miroire');
  const cadre = decorations.filter((decoration) => decoration.category === 'Cadre');

  return (
    <div className="app">
      {/* <Switch> */}
      <Route exact path="/">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <HomePage />
        <Footer />
      </Route>
      <Route exact path="/contact">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Contact />
        <Footer />
      </Route>
      {/* Route affichant tous les meubles */}
      <Route exact path="/meuble">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Products
          name="Meubles"
          product={meubles}
        />
        <Footer />
      </Route>
      {/* Route spécifique Banc */}
      <Route exact path="/banc">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Products
          name="Bancs"
          product={banc}
        />
        <Footer />
      </Route>
      {/* Route spécifique Console */}
      <Route exact path="/console">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Products
          name="Consoles"
          product={console}
        />
        <Footer />
      </Route>
      {/* Route spécifique etagere */}
      <Route exact path="/etagere">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Products
          name="Etagères"
          product={etagere}
        />
        <Footer />
      </Route>
      {/* Route spécifique meubleTV */}
      <Route exact path="/meubleTV">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Products
          name="Meubles TV"
          product={meubleTV}
        />
        <Footer />
      </Route>
      {/* Route spécifique table */}
      <Route exact path="/table">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Products
          name="Tables"
          product={table}
        />
        <Footer />
      </Route>
      {/* Route spécifique table d'appoint */}
      <Route exact path="/table-appoint">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Products
          name="Tables d'appoint"
          product={tableAppoint}
        />
        <Footer />
      </Route>
      {/* Route spécifique table de salon */}
      <Route exact path="/table-salon">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Products
          name="Tables de salon"
          redirectURL="meubles"
          product={tableSalon}
        />
        <Footer />
      </Route>

      {/* Route affichant tous les luminaires */}
      <Route exact path="/luminaires">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Luminaires
          name="Luminaires"
          product={luminaires}
        />
        <Footer />
      </Route>
      {/* Route spécifique applique murale */}
      <Route exact path="/applique-murale">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Luminaires
          name="Appliques-murale"
          product={appliqueMurale}
        />
        <Footer />
      </Route>
      {/* Route spécifique lampadaire */}
      <Route exact path="/lampadaire">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Luminaires
          name="Lampadaires"
          product={lampadaire}
        />
        <Footer />
      </Route>
      {/* Route spécifique lampe de table */}
      <Route exact path="/lampe-de-table">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Luminaires
          name="Luminaires"
          product={lampeDeTable}
        />
        <Footer />
      </Route>
      {/* Route spécifique suspension */}
      <Route exact path="/suspension">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Luminaires
          name="Suspensions"
          product={suspension}
        />
        <Footer />
      </Route>

      {/* Route affichant toutes les décorations */}
      <Route exact path="/decorations">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Decorations
          name="Décorations"
          product={decorations}
        />
        <Footer />
      </Route>
      {/* Route spécifique miroire */}
      <Route exact path="/miroire">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Decorations
          name="Miroires"
          product={miroire}
        />
        <Footer />
      </Route>
      {/* Route spécifique cadre */}
      <Route exact path="/cadre">
        <Header />
        {dropdown && (
          <DropdownTest />
        )}
        <Decorations
          name="Cadres"
          product={cadre}
        />
        <Footer />
      </Route>
      {/* BackOffice */}
      <BackOffice
        meubles={meubles}
        luminaires={luminaires}
        decorations={decorations}
      />
      {/* </Switch> */}
    </div>
  );
};

// == Export
export default App;
