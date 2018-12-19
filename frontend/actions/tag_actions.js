import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_TAG_ERRORS = "RECEIVE_TAG_ERRORS";

const receiveTags = (tags) => ({
  type: RECEIVE_TAGS,
  tags
});

const receiveTag = (payload) => ({
  type: RECEIVE_TAG,
  payload
});

const removeTag = (tag) => ({
  type: REMOVE_TAG,
  tagId: tag.id
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_TAG_ERRORS,
  errors
});

export const fetchTags = () => (dispatch) => (
  TagApiUtil.fetchTags().then(
    tags => dispatch(receiveTags(tags)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createTag = (tag) => (dispatch) => (
  TagApiUtil.createTag(tag).then(
    tag => dispatch(receiveTag(tag)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createNoteTag = (noteId, tag) => (dispatch) => (
  TagApiUtil.createNoteTag(noteId, tag).then(
    tag => dispatch(receiveTag(tag)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
)

export const deleteTag = (id) => (dispatch) => (
  TagApiUtil.deleteTag(id).then(
    tag => dispatch(removeTag(tag)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
