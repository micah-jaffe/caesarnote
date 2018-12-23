export const SELECT_NOTE = 'SELECT_NOTE';

export const selectNote = (id) => {
  return {
    type: SELECT_NOTE,
    id
  }
};
