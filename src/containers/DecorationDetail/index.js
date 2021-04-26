import { connect } from 'react-redux';

import DecorationDetail from 'src/components/DecorationDetail';
import { getProductBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const productDetail = getProductBySlug(state.decorations.decorationsList, ownProps.slug);
  return {
    category: productDetail.category,
  };
};

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DecorationDetail);
