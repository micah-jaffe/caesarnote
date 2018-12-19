import { connect } from 'react-redux';
import TagShow from './tag_show';
import { deleteTag, deleteNoteTag } from '../../../actions/tag_actions';
import { selectNoteTag } from '../../../reducers/selectors';


const mapStateToProps = (state) => {
  const selectedNoteId = state.ui.selection.noteId;

  return {
    selectedNoteId,
    entities: state.entities,
    selectNoteTag
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteTag: (id) => dispatch(deleteTag(id)),
  deleteNoteTag: (id) => dispatch(deleteNoteTag(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagShow);