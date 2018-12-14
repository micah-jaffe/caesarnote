import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE
} from '../actions/note_actions';

const notesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      return Object.assign({}, state, { [action.note.id]: action.note });
    case REMOVE_NOTE:
      const newState = Object.assign({}, state);
      delete newState[action.noteId]
      return newState;
    default:
      return state;
  }
};

export default notesReducer;