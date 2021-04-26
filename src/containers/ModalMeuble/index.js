import { connect } from 'react-redux';

import ModalMeuble from 'src/components/BackOffice/ModalMeuble';
import { openModal, closeModal } from 'src/actions/modal';
import { openEdit, closeEdit } from 'src/actions/edit';
import { getProductBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const productDetail = getProductBySlug(state.meubles.meublesList, ownProps.slug);
  console.log(ownProps.slug);
  return {
    titre: productDetail.titre,
    category: productDetail.category,
    hauteur: productDetail.hauteur,
    longeur: productDetail.longeur,
    largeur: productDetail.largeur,
    diametre: productDetail.diametre,
    date: productDetail.date,
    bois: productDetail.bois,
    pied: productDetail.pied,
    description: productDetail.description,
    image: productDetail.image,
    image1: productDetail.image1,
    image2: productDetail.image2,
    image3: productDetail.image3,
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalMeuble);
