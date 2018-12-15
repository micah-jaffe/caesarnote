import { combineReducers } from 'redux';
import noteSelectorReducer from './note_selector_reducer';
import navLinkSelectorReducer from './nav_link_selector_reducer';

export default combineReducers({
  noteId: noteSelectorReducer,
  navLink: navLinkSelectorReducer
});
