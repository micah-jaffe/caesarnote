import { combineReducers } from 'redux';
import noteSelectorReducer from './note_selector_reducer';

export default combineReducers({
  noteId: noteSelectorReducer
});
