import { connect } from 'react-redux';

import MeubleDetail from 'src/components/MeubleDetail';
import { getProductBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const productDetail = getProductBySlug(state.meubles.meublesList, ownProps.slug);
  return {
    category: productDetail.category,
    image: productDetail.image,
    image1: productDetail.image1,
    image2: productDetail.image2,
    image3: productDetail.image3,
  };
};

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MeubleDetail);
