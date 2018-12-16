import { connect } from 'react-redux';
import NoteShow from './note_show';
import { updateNote } from '../../../actions/note_actions';

const defaultNote = {
  id: 0,
  title: '',
  body: '',
  user_id: 0,
  notebook_id: 0
};
const defaultNotebook = {
  id: null,
  name: null,
  user_id: null
};

const mapStateToProps = (state) => {
  const selectedNoteId = state.ui.selection.noteId;
  const note = state.entities.notes[selectedNoteId] || defaultNote;
  const notebook = state.entities.notebooks[note.notebookId] || defaultNotebook;

  return {
    note,
    notebook
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateNote: (note) => dispatch(updateNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow);