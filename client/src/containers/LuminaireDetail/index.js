import { connect } from 'react-redux';

import LuminaireDetail from 'src/components/LuminaireDetail';
import { getProductBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const productDetail = getProductBySlug(state.luminaires.luminairesList, ownProps.slug);
  return {
    category: productDetail.category,
    image1: productDetail.image1,
    image2: productDetail.image2,
    image3: productDetail.image3,
    image: productDetail.image,
  };
};

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LuminaireDetail);
