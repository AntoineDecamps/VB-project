import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';
import { handleLogin } from 'src/actions/login';

const mapStateToProps = (state) => ({
  isLoged: state.login.isLoged,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin: () => dispatch(handleLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
