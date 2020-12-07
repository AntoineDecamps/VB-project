import { HANDLE_DROPDOWN_MEUBLE, HANDLE_DROPDOWN_LUMINAIRE, HANDLE_DROPDOWN_DECORATION } from '../actions/dropdown';

const initialState = {
  meuble: false,
  luminaire: false,
  decoration: false,
};

const dropdown = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_DROPDOWN_MEUBLE:
      return {
        ...state,
        meuble: !state.meuble,
        luminaire: false,
        decoration: false,
      };
    case HANDLE_DROPDOWN_LUMINAIRE:
      return {
        ...state,
        luminaire: !state.luminaire,
        meuble: false,
        decoration: false,
      };
    case HANDLE_DROPDOWN_DECORATION:
      return {
        ...state,
        decoration: !state.decoration,
        meuble: false,
        luminaire: false,
      };
    default:
      return state;
  }
};

export default dropdown;
