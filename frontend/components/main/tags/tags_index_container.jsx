import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { fetchTags, deleteTag } from '../../../actions/tag_actions';
import {
  openModal,
  closeModal
} from '../../../actions/modal_actions';

const mapStateToProps = (state) => ({
  tags: Object.values(state.entities.tags)
});

const mapDispatchToProps = (dispatch) => ({
  fetchTags: () => dispatch(fetchTags()),
  deleteTag: (id) => dispatch(deleteTag(id)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(TagsIndex);