import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import notebooksReducer from './notebooks_reducer';
import notesReducer from './notes_reducer';
import noteTagsReducer from './note_tags_reducer';
import tagsReducer from './tags_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  notebooks: notebooksReducer,
  notes: notesReducer,
  noteTags: noteTagsReducer,
  tags: tagsReducer
});

export default entitiesReducer;