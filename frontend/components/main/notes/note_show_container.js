import { connect } from 'react-redux';
import NoteShow from './note_show';
import { updateNote, deleteNote, cipherNote } from '../../../actions/note_actions';
import { fetchNotebook } from '../../../actions/notebook_actions';
import { fetchTags } from '../../../actions/tag_actions';
import { openModal } from '../../../actions/modal_actions';
import { selectTags } from '../../../reducers/selectors';
import { nullNote, nullNotebook } from '../../../util/null_entity_util';

const mapStateToProps = (state) => {
  const selectedNoteId = state.ui.selection.noteId;
  const note = state.entities.notes[selectedNoteId] || nullNote;
  const notebook = state.entities.notebooks[note.notebook_id] || nullNotebook;
  const tags = selectTags(note.id, state.entities);

  return {
    note,
    notebook,
    tags,
    loading: false
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateNote: (note) => dispatch(updateNote(note)),
  fetchNotebook: (id) => dispatch(fetchNotebook(id)),
  fetchTags: () => dispatch(fetchTags()),
  openModal: (modal) => dispatch(openModal(modal)),
  deleteNote: (id) => dispatch(deleteNote(id)),
  cipherNote: (note) => dispatch(cipherNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow);