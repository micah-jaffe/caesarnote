import * as NoteTagApiUtil from '../util/note_tag_api_util';

export const RECEIVE_NOTE_TAGS = "RECEIVE_NOTE_TAGS";
export const RECEIVE_NOTE_TAG = "RECEIVE_NOTE_TAG";
export const REMOVE_NOTE_TAG = "REMOVE_NOTE_TAG";
export const RECEIVE_NOTE_TAG_ERRORS = "RECEIVE_NOTE_TAG_ERRORS";

const receiveNoteTags = (note_tags) => ({
  type: RECEIVE_NOTE_TAGS,
  note_tags
});

const receiveNoteTag = (note_tag) => ({
  type: RECEIVE_NOTE_TAG,
  note_tag
});

const removeNoteTag = (note_tag) => ({
  type: REMOVE_NOTE_TAG,
  noteTagId: note_tag.id
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_NOTE_TAG_ERRORS,
  errors
});

export const fetchNoteTags = () => (dispatch) => (
  NoteTagApiUtil.fetchNoteTags().then(
    note_tags => dispatch(receiveNoteTags(note_tags)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createNoteTag = (note_tag) => (dispatch) => (
  NoteTagApiUtil.createNoteTag(note_tag).then(
    note_tag => dispatch(receiveNoteTag(note_tag)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const deleteNoteTag = (id) => (dispatch) => (
  NoteTagApiUtil.deleteNoteTag(id).then(
    note_tag => dispatch(removeNoteTag(note_tag)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
