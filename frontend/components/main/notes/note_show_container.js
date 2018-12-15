import { connect } from 'react-redux';
import NoteShow from './note_show';

const defaultNote = {
  id: null,
  title: '',
  body: '',
  user_id: null,
  notebook_id: null
};

const mapStateToProps = (state) => {
  const selectedNoteId = state.ui.selection.noteId;
  const note = state.entities.notes[selectedNoteId] || defaultNote;

  return {
    note
  };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow);