/* eslint-disable import/prefer-default-export */
export const redirectToMeubles = () => {
  document.location.href = '/admin/meubles';
};
export const redirectToLumainaires = () => {
  document.location.href = '/admin/luminaires';
};
export const redirectToDecorations = () => {
  document.location.href = '/admin/decorations';
};

export const redirectToHomepage = () => {
  document.location.href = '/';
};

export const getProductBySlug = (productList, slug) => productList.find(
  (product) => product.id === slug,
);
