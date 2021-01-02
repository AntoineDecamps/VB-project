import { combineReducers } from 'redux';
import burgerMenu from './burgerMenu';
import dropdown from './dropdown';
import meubles from './meubles';
import luminaires from './luminaires';
import decorations from './decorations';

export default combineReducers({
  burgerMenu,
  dropdown,
  meubles,
  luminaires,
  decorations,
});
