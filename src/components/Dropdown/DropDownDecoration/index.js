import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const DropDownDecoration = () => (
  <ul className="dropdownSubCategories">
    <div className="dropdownSubCategories__presentation">
      <Icon name="circle outline" />
      <li className="dropdownSubCategories__text">Miroir</li>
    </div>
    <div className="dropdownSubCategories__presentation">
      <Icon name="circle outline" />
      <li className="dropdownSubCategories__text">Cadre</li>
    </div>
  </ul>
);

DropDownDecoration.propTypes = {};

export default DropDownDecoration;
