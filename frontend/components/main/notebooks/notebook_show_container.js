import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NotebookShow from './notebook_show';
import { fetchNotebook } from '../../../actions/notebook_actions';
import { fetchNotes } from '../../../actions/note_actions';
import { selectNotes } from '../../../reducers/selectors';
import { selectNote } from '../../../actions/selection_actions';

const defaultNotebook = { 
  id: null,
  name: null,
  user_id: null
};

const mapStateToProps = (state, ownProps) => {
  const notebook = state.entities.notebooks[ownProps.match.params.notebookId] || defaultNotebook
  const notes = selectNotes(notebook.id, state.entities)

  return {
    notebook,
    notes
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchNotebook: (id) => dispatch(fetchNotebook(id)),
  fetchNotes: () => dispatch(fetchNotes()),
  selectNote: (id) => dispatch(selectNote(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookShow));