export const SELECT_NOTE = 'SELECT_NOTE';
// import { startLoading } from './loader_actions';

export const selectNote = (id) => {
  return {
    type: SELECT_NOTE,
    id
  }
};


// export const selectNote = (id) => (dispatch) => {
//   dispatch(startLoading());
//   dispatch(receiveNoteId(id));
// };
