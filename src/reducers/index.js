import { combineReducers } from 'redux';
import burgerMenu from './burgerMenu';
import dropdown from './dropdown';
import meubles from './meubles';
import luminaires from './luminaires';
import decorations from './decorations';
import edit from './edit';
import modal from './modal';
import login from './login';

export default combineReducers({
  burgerMenu,
  dropdown,
  meubles,
  luminaires,
  decorations,
  edit,
  modal,
  login,
});
