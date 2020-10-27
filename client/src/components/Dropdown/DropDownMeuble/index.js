import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const DropDownMeuble = () => (
  <ul className="dropdownSubCategories">
    <div className="dropdownSubCategories__presentation">
      <Icon name="circle outline" />
      <li className="dropdownSubCategories__text">Banc</li>
    </div>
    <div className="dropdownSubCategories__presentation">
      <Icon name="circle outline" />
      <li className="dropdownSubCategories__text">Console</li>
    </div>
    <div className="dropdownSubCategories__presentation">
      <Icon name="circle outline" />
      <li className="dropdownSubCategories__text">Etagère</li>
    </div>
    <div className="dropdownSubCategories__presentation">
      <Icon name="circle outline" />
      <li className="dropdownSubCategories__text">Meuble TV</li>
    </div>
    <div className="dropdownSubCategories__presentation">
      <Icon name="circle outline" />
      <li className="dropdownSubCategories__text">Table</li>
    </div>
    <div className="dropdownSubCategories__presentation">
      <Icon name="circle outline" />
      <li className="dropdownSubCategories__text">Table d'appoint</li>
    </div>
    <div className="dropdownSubCategories__presentation">
      <Icon name="circle outline" />
      <li className="dropdownSubCategories__text">Table basse</li>
    </div>
  </ul>
);

DropDownMeuble.propTypes = {};

export default DropDownMeuble;
