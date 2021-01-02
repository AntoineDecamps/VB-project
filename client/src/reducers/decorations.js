import { SAVE_DECORATIONS } from 'src/actions/decorations';

export const initialState = {
  decorationsList: [],
  // decorationLoading: true,
};

const decorations = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DECORATIONS:
      return {
        ...state,
        decorationsList: action.decorations,
        // luminaireLoading: false,
      };
    default:
      return state;
  }
};

export default decorations;
