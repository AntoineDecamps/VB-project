import { SAVE_LUMINAIRES } from 'src/actions/luminaires';

export const initialState = {
  luminairesList: [],
  // meubleLoading: true,
};

const luminaires = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_LUMINAIRES:
      return {
        ...state,
        luminairesList: action.luminaires,
        // luminaireLoading: false,
      };
    default:
      return state;
  }
};

export default luminaires;
