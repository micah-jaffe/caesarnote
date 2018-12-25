import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TagsIndex from './tags_index';
import { fetchTags, deleteTag } from '../../../actions/tag_actions';
import { fetchNotes } from '../../../actions/note_actions'; 
import { 
  selectTagNotes, 
  selectAllNotes, 
  selectAllTags, 
  selectAllNoteTags 
} from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  tags: selectAllTags(state.entities),
  noteTags: selectAllNoteTags(state.entities),
  notes: selectAllNotes(state.entities),
  selectTagNotes,
  loading: false
});

const mapDispatchToProps = (dispatch) => ({
  fetchTags: () => dispatch(fetchTags()),
  deleteTag: (id) => dispatch(deleteTag(id)),
  fetchNotes: () => dispatch(fetchNotes())
});

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
  )(TagsIndex));