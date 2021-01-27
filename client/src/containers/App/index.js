import { connect } from 'react-redux';
import { getMeubles } from 'src/actions/meubles';
import { getLuminaires } from 'src/actions/luminaires';
import { getDecorations } from 'src/actions/decorations';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  dropdown: state.burgerMenu.open,
  meubles: state.meubles.meublesList,
  luminaires: state.luminaires.luminairesList,
  decorations: state.decorations.decorationsList,
  isLoged: state.login.isLoged,
});

const mapDispatchToProps = (dispatch) => ({
  getMeubles: () => dispatch(getMeubles()),
  getLuminaires: () => dispatch(getLuminaires()),
  getDecorations: () => dispatch(getDecorations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
