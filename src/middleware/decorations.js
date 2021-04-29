import axios from 'axios';
import { GET_DECORATIONS, saveDecorations } from 'src/actions/decorations';

const decorations = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_DECORATIONS:
      axios.get('https://vb-creation-api.herokuapp.com/api/decorations')
        .then((response) => {
          store.dispatch(saveDecorations(response.data));
          // console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    default:
      next(action);
      break;
  }
};

export default decorations;
