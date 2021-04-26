export const GET_MEUBLES = 'GET_MEUBLES';
export const SAVE_MEUBLES = 'SAVE_MEUBLES';

export const getMeubles = () => ({
  type: GET_MEUBLES,
});

export const saveMeubles = (meubles) => ({
  type: SAVE_MEUBLES,
  meubles,
});
