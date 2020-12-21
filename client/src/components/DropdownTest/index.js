import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import { Icon } from 'semantic-ui-react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';

import './styles.scss';

function DropdownItem(props) {
  return (
    <div className="dropdownItem__list">
      {/* <Icon name={props.icon} size="big" /> */}
      <li className="menu-item">{props.children}</li>
      <div className="right__icon">
        <Icon name={props.arrow} />
      </div>
    </div>
  );
}
const DropdownTest = ({ open }) => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  useEffect(() => {
    if (open) {
      gsap.fromTo(dropdownRef.current, {
        height: 0,
      }, {
        height: 500,
        delay: 0,
        duration: 0.2,
      });
    }
  }, [open]);
  useEffect(() => {
    setMenuHeight(dropdownRef.current?.offsetHeight);
  }, []);
  function calcHeight(el) {
    const height = el.offsetHeight;
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
          <DropdownItem arrow="">Accueil</DropdownItem>
          <DropdownItem>Contact</DropdownItem>
          <div className="dropdownItem__List" onClick={() => setActiveMenu("meubles")}>
            <DropdownItem arrow="angle right">
              Meubles
            </DropdownItem>
          </div>
          <div className="dropdownItem__List" onClick={() => setActiveMenu("luminaires")}>
            <DropdownItem arrow="angle right">
              Luminaires
            </DropdownItem>
          </div>
          <div className="dropdownItem__List" onClick={() => setActiveMenu("decorations")}>
            <DropdownItem arrow="angle right">
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
            <DropdownItem arrow="angle right">Retour</DropdownItem>
          </div>
          <NavLink
            to="/meubles"
            exact
          >
            <DropdownItem>Tous les meubles</DropdownItem>
          </NavLink>
          <DropdownItem> </DropdownItem>
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
            <DropdownItem arrow="angle right">Retour</DropdownItem>
          </div>
          <DropdownItem>Tous les luminaires</DropdownItem>
          <DropdownItem> </DropdownItem>
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
            <DropdownItem arrow="angle right">Retour</DropdownItem>
          </div>
          <DropdownItem>Toutes les décorations</DropdownItem>
          <DropdownItem> </DropdownItem>
          <DropdownItem>Miroire</DropdownItem>
          <DropdownItem>Cadre</DropdownItem>
        </div>
      </CSSTransition>
    </ul>
  );
};

DropdownTest.propTypes = {};

export default DropdownTest;
