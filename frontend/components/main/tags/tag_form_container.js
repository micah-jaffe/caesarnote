import { connect } from 'react-redux';
import TagForm from './tag_form';
// import { createTag, deleteTag } from '../../../actions/tag_actions';
import { createNoteTag } from '../../../actions/tag_actions';
import { selectTags, selectAllTags } from '../../../reducers/selectors';


const mapStateToProps = (state) => {
  const selectedNoteId = state.ui.selection.noteId;
  const allTags = selectAllTags(state.entities);
  const tags = selectTags(selectedNoteId, state.entities)

  return {
    selectedNoteId,
    allTags,
    tags
  };
};

const mapDispatchToProps = (dispatch) => ({
  createNoteTag: (note_id, tag) => dispatch(createTag(note_id, tag)),
  // deleteTag: (id) => dispatch(deleteTag(id)),
  // createNoteTag: (tag) => dispatch(createNoteTag(tag)),
  // deleteNoteTag: (id) => dispatch(deleteNoteTag(id)),
  // fetchTagByName: (name) => dispatch(fetchTagByName(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagForm);