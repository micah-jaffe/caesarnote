export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (name, data) => {
  return {
    type: OPEN_MODAL,
    name,
    data
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};