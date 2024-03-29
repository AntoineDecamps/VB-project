import axios from 'axios';
import { GET_MEUBLES, saveMeubles } from 'src/actions/meubles';

const meubles = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MEUBLES:
      axios.get('https://vb-creation-api.herokuapp.com/api/meubles')
        .then((response) => {
          store.dispatch(saveMeubles(response.data));
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

export default meubles;
