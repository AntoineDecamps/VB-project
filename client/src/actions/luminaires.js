export const GET_LUMINAIRES = 'GET_LUMINAIRES';
export const SAVE_LUMINAIRES = 'SAVE_LUMINAIRES';

export const getLuminaires = () => ({
  type: GET_LUMINAIRES,
});

export const saveLuminaires = (luminaires) => ({
  type: SAVE_LUMINAIRES,
  luminaires,
});
