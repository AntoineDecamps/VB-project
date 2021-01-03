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
      {/* Route affichant tous les meubles */}
      <Route exact path="/meuble">
        <Products
          name="Meubles"
          product={meubles}
        />
      </Route>
      {/* Route spécifique Banc */}
      <Route exact path="/banc">
        <Products
          name="Meubles"
          product={banc}
        />
      </Route>
      {/* Route spécifique Console */}
      <Route exact path="/console">
        <Products
          name="Meubles"
          product={console}
        />
      </Route>
      {/* Route spécifique etagere */}
      <Route exact path="/etagere">
        <Products
          name="Meubles"
          product={etagere}
        />
      </Route>
      {/* Route spécifique meubleTV */}
      <Route exact path="/meubleTV">
        <Products
          name="Meubles"
          product={meubleTV}
        />
      </Route>
      {/* Route spécifique table */}
      <Route exact path="/table">
        <Products
          name="Meubles"
          product={table}
        />
      </Route>
      {/* Route spécifique table d'appoint */}
      <Route exact path="/table-appoint">
        <Products
          name="Meubles"
          product={tableAppoint}
        />
      </Route>
      {/* Route spécifique table de salon */}
      <Route exact path="/table-salon">
        <Products
          name="Meubles"
          redirectURL="meubles"
          product={tableSalon}
        />
      </Route>


      {/* Route affichant tous les luminaires */}
      <Route exact path="/luminaires">
        <Luminaires
          name="Luminaires"
          product={luminaires}
        />
      </Route>
      {/* Route spécifique applique murale */}
      <Route exact path="/applique-murale">
        <Luminaires
          name="Luminaires"
          product={appliqueMurale}
        />
      </Route>
      {/* Route spécifique lampadaire */}
      <Route exact path="/lampadaire">
        <Luminaires
          name="Luminaires"
          product={lampadaire}
        />
      </Route>
      {/* Route spécifique lampe de table */}
      <Route exact path="/lampe-de-table">
        <Luminaires
          name="Luminaires"
          product={lampeDeTable}
        />
      </Route>
      {/* Route spécifique suspension */}
      <Route exact path="/suspension">
        <Luminaires
          name="Luminaires"
          product={suspension}
        />
      </Route>


      {/* Route affichant toutes les décorations */}
      <Route exact path="/decorations">
        <Decorations
          name="Décorations"
          product={decorations}
        />
      </Route>
      {/* Route spécifique miroire */}
      <Route exact path="/miroire">
        <Decorations
          name="Décorations"
          product={miroire}
        />
      </Route>
      {/* Route spécifique cadre */}
      <Route exact path="/cadre">
        <Decorations
          name="Décorations"
          product={cadre}
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
