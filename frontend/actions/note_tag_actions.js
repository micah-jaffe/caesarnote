import * as NoteTagApiUtil from '../util/note_tag_api_util';

export const RECEIVE_NOTE_TAGS = "RECEIVE_NOTE_TAGS";
export const RECEIVE_NOTE_TAG = "RECEIVE_NOTE_TAG";
export const REMOVE_NOTE_TAG = "REMOVE_NOTE_TAG";
export const RECEIVE_NOTE_TAG_ERRORS = "RECEIVE_NOTE_TAG_ERRORS";

const receiveNoteTags = (noteTags) => ({
  type: RECEIVE_NOTE_TAGS,
  noteTags
});

const receiveNoteTag = (noteTag) => ({
  type: RECEIVE_NOTE_TAG,
  noteTag
});

const removeNoteTag = (noteTag) => ({
  type: REMOVE_NOTE_TAG,
  noteTagId: noteTag.id
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_NOTE_TAG_ERRORS,
  errors
});

export const fetchNoteTags = () => (dispatch) => (
  NoteTagApiUtil.fetchNoteTags().then(
    noteTags => dispatch(receiveNoteTags(noteTags)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createNoteTag = (noteTag) => (dispatch) => (
  NoteTagApiUtil.createNoteTag(noteTag).then(
    noteTag => dispatch(receiveNoteTag(noteTag)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const deleteNoteTag = (id) => (dispatch) => (
  NoteTagApiUtil.deleteNoteTag(id).then(
    noteTag => dispatch(removeNoteTag(noteTag)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
