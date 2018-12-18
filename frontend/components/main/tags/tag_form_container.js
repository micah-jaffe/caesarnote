import { connect } from 'react-redux';
import TagForm from './tag_form';
import { createTag, deleteTag } from '../../../actions/tag_actions';
import { createNoteTag, deleteNoteTag } from '../../../actions/note_tag_actions';
import { selectTags } from '../../../reducers/selectors';


const mapStateToProps = (state) => {
  const selectedNoteId = state.ui.selection.noteId;
  const tags = selectTags(selectedNoteId, state.entities)

  return {
    selectedNoteId,
    tags
  };
};

const mapDispatchToProps = (dispatch) => ({
  createTag: (tag) => dispatch(createTag(tag)),
  // deleteTag: (id) => dispatch(deleteTag(id)),
  createNoteTag: (tag) => dispatch(createNoteTag(tag)),
  // deleteNoteTag: (id) => dispatch(deleteNoteTag(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagForm);