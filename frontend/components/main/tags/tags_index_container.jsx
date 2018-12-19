import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { fetchTags, deleteTag } from '../../../actions/tag_actions';

const mapStateToProps = (state) => ({
  tags: Object.values(state.entities.tags)
});

const mapDispatchToProps = (dispatch) => ({
  fetchTags: () => dispatch(fetchTags()),
  deleteTag: (id) => dispatch(deleteTag(id)),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(TagsIndex);