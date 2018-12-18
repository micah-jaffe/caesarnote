import {
  RECEIVE_NOTE_TAGS,
  RECEIVE_NOTE_TAG,
  REMOVE_NOTE_TAG
} from '../actions/note_tag_actions';

const noteTagsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTE_TAGS:
      return action.noteTags;
    case RECEIVE_NOTE_TAG:
      return Object.assign({}, state, { [action.noteTag.id]: action.noteTag });
    case REMOVE_NOTE_TAG:
      const newState = Object.assign({}, state);
      delete newState[action.noteTagId]
      return newState;
    default:
      return state;
  }
}

export default noteTagsReducer;