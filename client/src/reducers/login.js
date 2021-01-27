import { HANDLE_LOGIN } from '../actions/login';
import { HANDLE_LOGOUT } from '../actions/login';

const initialState = {
  isLoged: false,
};

const login = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      return {
        ...state,
        isLoged: true,
      };
    case HANDLE_LOGOUT:
      return {
        ...state,
        isLoged: false,
      };
    default:
      return state;
  }
};

export default login;
