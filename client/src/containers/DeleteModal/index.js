import { connect } from 'react-redux';
import { openDelete, closeDelete } from 'src/actions/modal';
import { getMeubles } from 'src/actions/meubles';
import { getLuminaires } from 'src/actions/luminaires';
import { getDecorations} from 'src/actions/decorations';

import DeleteModal from 'src/components/BackOffice/DeleteModal';

const mapStateToProps = (state) => ({
  open: state.modal.delete,
});

const mapDispatchToProps = (dispatch) => ({
  openDelete: () => dispatch(openDelete()),
  closeDelete: () => dispatch(closeDelete()),
  getMeubles: () => dispatch(getMeubles()),
  getLuminaires: () => dispatch(getLuminaires()),
  getDecorations: () => dispatch(getDecorations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
