import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_TAG_ERRORS = "RECEIVE_TAG_ERRORS";

const receiveTags = (payload) => ({
  type: RECEIVE_TAGS,
  payload
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
    payload => dispatch(receiveTags(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createTag = (noteId, tag) => (dispatch) => (
  TagApiUtil.createTag(noteId, tag).then(
    payload => dispatch(receiveTag(payload)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
)

export const deleteTag = (id) => (dispatch) => (
  TagApiUtil.deleteTag(id).then(
    payload => dispatch(removeTag(payload.tags[id])),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
