import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import selectionReducer from './selection_reducer';
import filtersReducer from './filters_reducer';

export default combineReducers({
  modal: modalReducer,
  selection: selectionReducer,
  filters: filtersReducer
});