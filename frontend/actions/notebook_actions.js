import * as NotebookApiUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";
export const RECEIVE_NOTEBOOK_ERRORS = "RECEIVE_NOTEBOOK_ERRORS";

const receiveNotebooks = (notebooks) => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks
});

const receiveNotebook = (notebook) => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

const removeNotebook = (notebook) => ({
  type: REMOVE_NOTEBOOK,
  notebookId: notebook.id
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_NOTEBOOK_ERRORS,
  errors
});

export const fetchNotebooks = () => (dispatch) => (
  NotebookApiUtil.fetchNotebooks().then(
    notebooks => dispatch(receiveNotebooks(notebooks)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const fetchNotebook = (id) => (dispatch) => (
  NotebookApiUtil.fetchNotebook(id).then(
    notebook => dispatch(receiveNotebook(notebook)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const createNotebook = (notebook) => (dispatch) => (
  NotebookApiUtil.createNotebook(notebook).then(
    notebook => dispatch(receiveNotebook(notebook)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const updateNotebook = (notebook) => (dispatch) => (
  NotebookApiUtil.updateNotebook(notebook).then(
    notebook => dispatch(receiveNotebook(notebook)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const deleteNotebook = (id) => (dispatch) => (
  NotebookApiUtil.deleteNotebook(id).then(
    notebook => dispatch(removeNotebook(notebook)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);
