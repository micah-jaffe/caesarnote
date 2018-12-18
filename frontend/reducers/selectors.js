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

export const selectShortcuts = (entities) => {
  const notes = Object.values(entities.notes).filter(note => note.is_shortcut);
  notes.forEach(note => note.shortcutType = 'note')

  const notebooks = Object.values(entities.notebooks).filter(notebook => notebook.is_shortcut);
  notebooks.forEach(notebook => notebook.shortcutType = 'notebook')
  
  return notes.concat(notebooks);
};

export const selectTags = (noteId, entities) => {
  // gett all notetags corresponding to noteId
  const noteTags = Object.values(entities.noteTags).filter(noteTag => noteTag.note_id === noteId);
  const tagIds = noteTags.map(noteTag => noteTag.tag_id);

  // only return those tags whose ids are in allowed tagIds

  return Object.values(entities.tags).filter(tag => tagIds.includes(tag.id));
}