import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG
} from '../actions/tag_actions';

const noteTagsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TAGS:
      return action.payload.note_tags || {};
    case RECEIVE_TAG:
      return Object.assign({}, state, action.payload.note_tags);
    default:
      return state;
  }
};

export default noteTagsReducer;