import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { fetchTags, deleteTag } from '../../../actions/tag_actions';
import { fetchNotes } from '../../../actions/note_actions'; 
import { selectTagNotes } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  tags: Object.values(state.entities.tags),
  // tagNotes: selectTagNotes()
  // loading: state.ui.loading.tagsLoading
  loading: false
});

const mapDispatchToProps = (dispatch) => ({
  fetchTags: () => dispatch(fetchTags()),
  deleteTag: (id) => dispatch(deleteTag(id)),
  fetchNotes: () => dispatch(fetchNotes())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(TagsIndex);