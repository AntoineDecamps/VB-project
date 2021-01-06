import { OPEN_EDIT, CLOSE_EDIT } from '../actions/edit';

const initialState = {
  open: false,
};

const edit = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_EDIT:
      return {
        ...state,
        open: true,
      };
    case CLOSE_EDIT:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default edit;
