import * as NotebookApiUtil from '../util/note_api_util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS";

const receiveNotes = (notes) => ({
  type: RECEIVE_NOTES,
  notes
});

const receiveNote = (note) => ({
  type: RECEIVE_NOTE,
  note
});

const removeNote = (note) => ({
  type: REMOVE_NOTE,
  noteId: note.id
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_NOTE_ERRORS,
  errors
});

export const fetchNotes = () => (dispatch) => (
  NotebookApiUtil.fetchNotes().then(
    notes => dispatch(receiveNotebooks(notes)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createNote = (note) => (dispatch) => (
  NotebookApiUtil.createNote(note).then(
    note => dispatch(receiveNote(note)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const updateNote = (note) => (dispatch) => (
  NotebookApiUtil.updateNote(note).then(
    note => dispatch(receiveNote(note)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const deleteNote = (id) => (dispatch) => (
  NotebookApiUtil.deleteNote(id).then(
    note => dispatch(removeNote(note)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);