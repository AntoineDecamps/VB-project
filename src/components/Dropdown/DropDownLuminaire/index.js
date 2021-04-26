import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const DropDownLuminaire = () => (
  <ul className="dropdownSubCategories">
    <div className="dropdownSubCategories__presentation">
      <Icon name="circle outline" />
      <li className="dropdownSubCategories__text">Applique murale</li>
    </div>
    <div className="dropdownSubCategories__presentation">
      <Icon name="circle outline" />
      <li className="dropdownSubCategories__text">Lampadaire</li>
    </div>
    <div className="dropdownSubCategories__presentation">
      <Icon name="circle outline" />
      <li className="dropdownSubCategories__text">Lampe de table</li>
    </div>
    <div className="dropdownSubCategories__presentation">
      <Icon name="circle outline" />
      <li className="dropdownSubCategories__text">Suspension</li>
    </div>
  </ul>
);

DropDownLuminaire.propTypes = {};

export default DropDownLuminaire;
