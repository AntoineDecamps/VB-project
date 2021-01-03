import { connect } from 'react-redux';

import DropdownTest from 'src/components/DropdownTest';
import { handleMenu } from 'src/actions/burgerMenu';

const mapStateToProps = (state) => ({
  open: state.burgerMenu.open,
});

const mapDispatchToProps = (dispatch) => ({
  handleMenu: () => dispatch(handleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownTest);
