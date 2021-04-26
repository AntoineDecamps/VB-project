import {
  OPEN_MODAL,
  OPEN_DELETE,
  CLOSE_MODAL,
  CLOSE_DELETE,
} from '../actions/modal';

const initialState = {
  open: false,
  delete: false,
};

const modal = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        open: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        open: false,
      };
    case OPEN_DELETE:
      return {
        ...state,
        delete: true,
      };
    case CLOSE_DELETE:
      return {
        ...state,
        delete: false,
      };
    default:
      return state;
  }
};

export default modal;
