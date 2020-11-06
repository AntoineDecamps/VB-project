import React, { useState, useRef, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import { CSSTransition } from 'react-transition-group';

import './styles.scss';

function DropdownItem(props) {
  return (
    <div className="dropdownItem__list">
      <Icon name={props.icon} size="big" />
      <li className="menu-item">{props.children}</li>
      <div className="right__icon">
        <Icon name={props.arrow} />
      </div>
    </div>
  );
}
const DropdownTest = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  useEffect(() => {
    setMenuHeight(dropdownRef.current?.offsetHeight);
  }, []);
  function calcHeight(el) {
    const height = el.offsetHeight + 20;
    setMenuHeight(height);
  }
  return (
    <ul className="dropdownTest" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem icon="home">Accueil</DropdownItem>
          <DropdownItem icon="address card">Contact</DropdownItem>
          <div className="test" onClick={() => setActiveMenu("meubles")}>
            <DropdownItem icon="box" arrow="angle right">
              Meubles
            </DropdownItem>
          </div>
          <div className="test" onClick={() => setActiveMenu("luminaires")}>
            <DropdownItem icon="lightbulb outline" arrow="angle right">
              Luminaires
            </DropdownItem>
          </div>
          <div className="test" onClick={() => setActiveMenu("decorations")}>
            <DropdownItem icon="heart" arrow="angle right">
              Décorations
            </DropdownItem>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'meubles'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <div onClick={() => setActiveMenu('main')}>
            <DropdownItem icon="angle left">Retour</DropdownItem>
          </div>
          <DropdownItem>Banc</DropdownItem>
          <DropdownItem>Console</DropdownItem>
          <DropdownItem>Etagère</DropdownItem>
          <DropdownItem>Meuble TV</DropdownItem>
          <DropdownItem>Table</DropdownItem>
          <DropdownItem>Table d'appoint</DropdownItem>
          <DropdownItem>Table basse</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'luminaires'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <div onClick={() => setActiveMenu('main')}>
            <DropdownItem icon="angle left">Retour</DropdownItem>
          </div>
          <DropdownItem>Applique murale</DropdownItem>
          <DropdownItem>Lampadaire</DropdownItem>
          <DropdownItem>Lampe de table</DropdownItem>
          <DropdownItem>Suspension</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'decorations'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <div onClick={() => setActiveMenu('main')}>
            <DropdownItem icon="angle left">Retour</DropdownItem>
          </div>
          <DropdownItem>Miroire</DropdownItem>
          <DropdownItem>Cadre</DropdownItem>
        </div>
      </CSSTransition>
    </ul>
  );
};

DropdownTest.propTypes = {};

export default DropdownTest;
