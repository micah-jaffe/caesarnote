import { connect } from 'react-redux';
import NewNote from './new_note';
import { createNote } from '../../../actions/note_actions';
import { withRouter } from 'react-router-dom';
import { selectDefaultNotebook } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  userId: state.session.id,
  userDefaultNotebook: selectDefaultNotebook(state.entities)
}); 

const mapDispatchToProps = (dispatch) => ({
  createNote: (note) => dispatch(createNote(note)),
  fetchNotebooks: () => dispatch(fetchNotebooks())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote)); 