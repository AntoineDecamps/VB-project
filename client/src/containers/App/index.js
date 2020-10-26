import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  dropdown: state.burgerMenu.open,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
