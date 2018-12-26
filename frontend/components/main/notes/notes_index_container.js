import { connect } from 'react-redux';
import NotesIndex from './notes_index';
import { fetchNotes } from '../../../actions/note_actions';
import { selectNote } from '../../../actions/selection_actions';
import { openModal } from '../../../actions/modal_actions';
import { selectAllNotes } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const selectedNoteId = state.ui.selection.noteId;
  const notes = selectAllNotes(state.entities);
  const searchQuery = state.ui.filters.search.searchQuery;
  const trash = ownProps.match.path === "/main/trash";

  return {
    notes,
    selectedNoteId,
    searchQuery,
    loading: false,
    trash
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchNotes()),
  selectNote: (id) => dispatch(selectNote(id)),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);