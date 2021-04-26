import { connect } from 'react-redux';

import Dropdown from 'src/components/Dropdown';
import { handleDropdownMeuble, handleDropdownLuminaire, handleDropdownDecoration } from 'src/actions/dropdown';

const mapStateToProps = (state) => ({
  dropdown_meuble: state.dropdown.meuble,
  dropdown_luminaire: state.dropdown.luminaire,
  dropdown_decoration: state.dropdown.decoration,
});

const mapDispatchToProps = (dispatch) => ({
  handleDropdownMeuble: () => dispatch(handleDropdownMeuble()),
  handleDropdownLuminaire: () => dispatch(handleDropdownLuminaire()),
  handleDropdownDecoration: () => dispatch(handleDropdownDecoration()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
