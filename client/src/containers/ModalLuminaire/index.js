import { connect } from 'react-redux';

import ModalLuminaire from 'src/components/BackOffice/ModalLuminaire';
import { openModal, closeModal } from 'src/actions/modal';
import { openEdit, closeEdit } from 'src/actions/edit';
import { getProductBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const productDetail = getProductBySlug(state.luminaires.luminairesList, ownProps.slug);
  console.log(ownProps.slug);
  return {
    titre: productDetail.titre,
    category: productDetail.category,
    hauteur: productDetail.hauteur,
    diametre: productDetail.diametre,
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalLuminaire);
