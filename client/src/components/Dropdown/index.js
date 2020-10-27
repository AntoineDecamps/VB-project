import React from 'react';
import DropDownMeuble from 'src/components/Dropdown/DropDownMeuble';
import DropDownLuminaire from 'src/components/Dropdown/DropDownLuminaire';
import DropDownDecoration from 'src/components/Dropdown/DropDownDecoration';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const DrompDown = ({
  dropdown_meuble,
  dropdown_luminaire,
  dropdown_decoration,
  handleDropdownMeuble,
  handleDropdownLuminaire,
  handleDropdownDecoration 
}) => (
  <div className="dropdown">
    <ul>
      <div className="dropdown__item">
        <Icon name="home" size="big" />
        <li className="dropdown__text">Accueil</li>
      </div>
      <div className="dropdown__item">
        <Icon name="address card" size="big" />
        <li className="dropdown__text">Contact</li>
      </div>
      <div>
        <div className="dropdown__item">
          <Icon name="box" size="big" />
          <li className="dropdown__text">Meubles</li>
          <Icon onClick={handleDropdownMeuble} name="angle down" size="big" />
        </div>
        <div className="dropdown__categories">
          {dropdown_meuble && (
          <DropDownMeuble />
          )}
        </div>
      </div>
      <div className="dropdown__item">
        <Icon name="lightbulb outline" size="big" />
        <li className="dropdown__text">Luminaires</li>
        <Icon onClick={handleDropdownLuminaire} name="angle down" size="big" />
      </div>
      <div className="dropdown__categories">
        {dropdown_luminaire && (
        <DropDownLuminaire />
        )}
      </div>
      <div className="dropdown__item">
        <Icon name="heart" size="big" />
        <li className="dropdown__text">Décorations</li>
        <Icon onClick={handleDropdownDecoration} name="angle down" size="big" />
      </div>
      <div className="dropdown__categories">
        {dropdown_decoration && (
        <DropDownDecoration />
        )}
      </div>
    </ul>
  </div>
);

DrompDown.propTypes = {};

export default DrompDown;
