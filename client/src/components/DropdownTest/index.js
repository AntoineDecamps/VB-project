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
const DropdownTest = ({ open, handleMenu }) => {
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
          <NavLink
            to="/"
            exact
          >
            <DropdownItem arrow=""><p onClick={handleMenu}>Accueil</p></DropdownItem>
          </NavLink>
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
            to="/meuble"
            exact
          >
            <DropdownItem><p onClick={handleMenu}>Tous les meubles</p></DropdownItem>
          </NavLink>
          <DropdownItem> </DropdownItem>
          <NavLink to="/banc" exact>
            <DropdownItem><p onClick={handleMenu}>Banc</p></DropdownItem>
          </NavLink>
          <NavLink to="/console" exact>
            <DropdownItem><p onClick={handleMenu}>Console</p></DropdownItem>
          </NavLink>
          <NavLink to="/etagere" exact>
            <DropdownItem><p onClick={handleMenu}>Etagère</p></DropdownItem>
          </NavLink>
          <NavLink to="/meubleTV" exact>
            <DropdownItem><p onClick={handleMenu}>Meuble TV</p></DropdownItem>
          </NavLink>
          <NavLink to="/table" exact>
            <DropdownItem><p onClick={handleMenu}>Table</p></DropdownItem>
          </NavLink>
          <NavLink to="/table-appoint" exact>
            <DropdownItem><p onClick={handleMenu}>Table d'appoint</p></DropdownItem>
          </NavLink>
          <NavLink to="/table-salon" exact>
            <DropdownItem><p onClick={handleMenu}>Table de salon</p></DropdownItem>
          </NavLink>
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
          <NavLink
            to="/luminaires"
            exact
          >
            <DropdownItem><p onClick={handleMenu}>Tous les luminaires</p></DropdownItem>
          </NavLink>
          <DropdownItem> </DropdownItem>
          <NavLink to="/applque-murale" exact>
            <DropdownItem><p onClick={handleMenu}>Applique murale</p></DropdownItem>
          </NavLink>
          <NavLink to="/lampadaire" exact>
            <DropdownItem><p onClick={handleMenu}>Lampadaire</p></DropdownItem>
          </NavLink>
          <NavLink to="/lampe-de-table" exact>
            <DropdownItem><p onClick={handleMenu}>Lampe de table</p></DropdownItem>
          </NavLink>
          <NavLink to="/suspension" exact>
            <DropdownItem><p onClick={handleMenu}>Suspension</p></DropdownItem>
          </NavLink>
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
          <NavLink
            to="/decorations"
            exact
          >
            <DropdownItem><p onClick={handleMenu}>Toutes les décorations</p></DropdownItem>
          </NavLink>
          <DropdownItem> </DropdownItem>
          <NavLink to="/miroire" exact>
            <DropdownItem><p onClick={handleMenu}>Miroire</p></DropdownItem>
          </NavLink>
          <NavLink to="/cadre" exact>
            <DropdownItem><p onClick={handleMenu}>Cadre</p></DropdownItem>
          </NavLink>
        </div>
      </CSSTransition>
    </ul>
  );
};

DropdownTest.propTypes = {};

export default DropdownTest;
