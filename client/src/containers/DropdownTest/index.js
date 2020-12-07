import { connect } from 'react-redux';

import DropdownTest from 'src/components/DropdownTest';

const mapStateToProps = (state) => ({
  open: state.burgerMenu.open,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownTest);
