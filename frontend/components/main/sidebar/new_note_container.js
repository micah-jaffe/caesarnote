import { connect } from 'react-redux';
import NewNote from './new_note';
import { createNote } from '../../../actions/note_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session }) => ({
  userId: session.id
}); 

const mapDispatchToProps = (dispatch) => ({
  createNote: (note) => dispatch(createNote(note))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote));