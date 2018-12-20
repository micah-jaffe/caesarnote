import { combineReducers } from 'redux';

// import filters from './filters_reducer';
import modalReducer from './modal_reducer';
import selectionReducer from './selection_reducer';
import loaderReducer from './loader_reducer';

export default combineReducers({
  modal: modalReducer,
  selection: selectionReducer
  // loading: loaderReducer
});