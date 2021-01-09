import { connect } from 'react-redux';

import ModalDecoration from 'src/components/BackOffice/ModalDecoration';
import { openModal, closeModal } from 'src/actions/modal';
import { openEdit, closeEdit } from 'src/actions/edit';
import { getProductBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const productDetail = getProductBySlug(state.decorations.decorationsList, ownProps.slug);
  console.log(ownProps.slug);
  return {
    titre: productDetail.titre,
    category: productDetail.category,
    hauteur: productDetail.hauteur,
    largeur: productDetail.largeur,
    date: productDetail.date,
    bois: productDetail.bois,
    description: productDetail.description,
    image: productDetail.image,
    id: productDetail.id,
    open: state.modal.open,
    edit: state.edit.open,
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
  openEdit: () => dispatch(openEdit()),
  closeEdit: () => dispatch(closeEdit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalDecoration);
