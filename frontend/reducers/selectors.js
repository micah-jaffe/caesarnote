export const currentUser = (state) => {
  return state.entities.users[state.session.id];
};

export const selectNotes = (notebookId, entities) => {
  return Object.values(entities.notes).filter(note => note.notebook_id === notebookId);
};

export const selectAllNotes = (entities) => {
  return Object.values(entities.notes);
};

export const selectDefaultNotebook = (entities) => {
  return Object.values(entities.notebooks).filter(notebook => notebook.is_default)[0];
};