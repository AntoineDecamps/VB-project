import { combineReducers } from 'redux';
import burgerMenu from './burgerMenu';
import dropdown from './dropdown';

export default combineReducers({
  burgerMenu,
  dropdown,
});
