import { connect } from 'react-redux';

import SideBar from 'src/components/BackOffice/Sidebar';
import { handleLogout } from 'src/actions/login';

const mapStateToProps = (state) => ({
  isLoged: state.login.isLoged,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(handleLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
