import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_NOTE_TAG
} from '../actions/tag_actions';

const noteTagsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TAGS:
      return action.payload.note_tags || {};
    case RECEIVE_TAG:
      return Object.assign({}, state, action.payload.note_tags);
    case REMOVE_NOTE_TAG:
      const newState = Object.assign({}, state);
      delete newState[action.noteTagId]
      return newState;
    default:
      return state;
  }
};

export default noteTagsReducer;