import { connect } from 'react-redux';
import NoteShow from './note_show';
import { updateNote, deleteNote } from '../../../actions/note_actions';
import { fetchNotebook } from '../../../actions/notebook_actions';
import { openModal } from '../../../actions/modal_actions';

const defaultNote = {
  id: 0,
  title: '',
  body: '',
  user_id: 0,
  notebook_id: 0
};

const defaultNotebook = {
  id: null,
  name: '',
  user_id: null
};

const mapStateToProps = (state) => {
  const selectedNoteId = state.ui.selection.noteId;
  const note = state.entities.notes[selectedNoteId] || defaultNote;
  const notebook = state.entities.notebooks[note.notebook_id] || defaultNotebook;

  return {
    note,
    notebook
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateNote: (note) => dispatch(updateNote(note)),
  fetchNotebook: (id) => dispatch(fetchNotebook(id)),
  openModal: (modal) => dispatch(openModal(modal)),
  deleteNote: (id) => dispatch(deleteNote(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow);