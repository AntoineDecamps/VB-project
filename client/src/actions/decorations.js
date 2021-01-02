export const GET_DECORATIONS = 'GET_DECORATIONS';
export const SAVE_DECORATIONS = 'SAVE_DECORATIONS';

export const getDecorations = () => ({
  type: GET_DECORATIONS,
});

export const saveDecorations = (decorations) => ({
  type: SAVE_DECORATIONS,
  decorations,
});
