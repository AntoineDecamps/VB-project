import { connect } from 'react-redux';

import BurgerMenu from 'src/components/Header/BurgerMenu';
import { handleMenu } from 'src/actions/burgerMenu';

const mapStateToProps = (state) => ({
  open: state.burgerMenu.open,
});

const mapDispatchToProps = (dispatch) => ({
  handleMenu: () => dispatch(handleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);
