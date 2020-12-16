import { combineReducers } from 'redux';
import burgerMenu from './burgerMenu';
import dropdown from './dropdown';
import meubles from './meubles';

export default combineReducers({
  burgerMenu,
  dropdown,
  meubles,
});
