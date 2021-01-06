export const OPEN_MODAL = 'HANDLE_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_DELETE = 'OPEN_DELETE';
export const CLOSE_DELETE = 'CLOSE_DELETE';

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const openDelete = () => ({
  type: OPEN_DELETE,
});

export const closeDelete = () => ({
  type: CLOSE_DELETE,
});
