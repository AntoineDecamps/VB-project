import { connect } from 'react-redux';
import { getMeubles } from 'src/actions/meubles';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  dropdown: state.burgerMenu.open,
  meubles: state.meubles.meublesList,
});

const mapDispatchToProps = (dispatch) => ({
  getMeubles: () => dispatch(getMeubles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
