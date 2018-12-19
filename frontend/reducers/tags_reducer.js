import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG
} from '../actions/tag_actions';

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      return Object.assign({}, state, action.payload.tags);
    case REMOVE_TAG:
      const newState = Object.assign({}, state);
      delete newState[action.tagId]
      return newState;
    default:
      return state;
  }
}

export default tagsReducer;