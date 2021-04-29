import axios from 'axios';
import { GET_LUMINAIRES, saveLuminaires } from 'src/actions/luminaires';

const luminaires = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_LUMINAIRES:
      axios.get('https://vb-creation-api.herokuapp.com/api/luminaires')
        .then((response) => {
          store.dispatch(saveLuminaires(response.data));
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

export default luminaires;
