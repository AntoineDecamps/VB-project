import { SAVE_MEUBLES } from 'src/actions/meubles';

export const initialState = {
  meublesList: [],
  // meubleLoading: true,
};

const meubles = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MEUBLES:
      return {
        ...state,
        meublesList: action.meubles,
        // meubleLoading: false,
      };
    default:
      return state;
  }
};

export default meubles;
