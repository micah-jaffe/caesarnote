import { START_LOADING } from '../actions/loader_actions';
import { 
  RECEIVE_NOTES, 
  RECEIVE_NOTE,
  REMOVE_NOTE
} from '../actions/note_actions';
import { 
  RECEIVE_NOTEBOOKS, 
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK
} from '../actions/notebook_actions';
import { 
  RECEIVE_TAGS, 
  RECEIVE_TAG,
  REMOVE_TAG
} from '../actions/tag_actions';

const initialState = {
  notesLoading: false,
  notebooksLoading: false,
  tagsLoading: false
};

const loaderReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TAGS:
      return Object.assign({}, state, { tagsLoading: false });
    case RECEIVE_NOTES:
        return Object.assign({}, state, { notesLoading: false });
    case RECEIVE_NOTE:
      return Object.assign({}, state, { notesLoading: false });
    case REMOVE_NOTE:
      return Object.assign({}, state, { notesLoading: false });
    case RECEIVE_NOTEBOOKS:
        return Object.assign({}, state, { notebooksLoading: false });
    case RECEIVE_NOTEBOOK:
      return Object.assign({}, state, { notebooksLoading: false });
    case REMOVE_NOTEBOOK:
      return Object.assign({}, state, { notebooksLoading: false });
 
    case START_LOADING:
        return true;
    default:
      return state;
  }
};

export default loaderReducer;