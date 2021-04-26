import { HANDLE_MENU } from '../actions/burgerMenu';

const initialState = {
  open: false,
};

const burgerMenu = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_MENU:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};

export default burgerMenu;
