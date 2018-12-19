import { connect } from 'react-redux';
import TagShow from './tag_show';
import { deleteTag, deleteNoteTag } from '../../../actions/tag_actions';
import { selectTags, selectAllTags, selectNoteTag } from '../../../reducers/selectors';


const mapStateToProps = (state) => {
  const selectedNoteId = state.ui.selection.noteId;
  // const tag = 
  // const noteTagId = selectNoteTag(selectedNoteId, __, state.entities);
  // const allTags = selectAllTags(state.entities);
  // const tags = selectTags(selectedNoteId, state.entities);

  return {
    selectedNoteId,
    // selectNoteTag,
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