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

export const selectNotebookNotes = (notebookId, notes) => {
  return Object.values(notes).filter(note => note.notebook_id === notebookId);
  
};

export const selectShortcuts = (entities) => {
  const notes = Object.values(entities.notes).filter(note => note.is_shortcut);
  notes.forEach(note => note.shortcutType = 'note')

  const notebooks = Object.values(entities.notebooks).filter(notebook => notebook.is_shortcut);
  notebooks.forEach(notebook => notebook.shortcutType = 'notebook')
  
  return notes.concat(notebooks);
};

export const selectAllTags = (entities) => {
  return Object.values(entities.tags);
};

export const selectAllNoteTags = (entities) => {
  return Object.values(entities.noteTags);
};

export const selectTags = (noteId, entities) => {
  const noteTags = Object.values(entities.noteTags).filter(noteTag => noteTag.note_id === noteId);
  const tagIds = noteTags.map(noteTag => noteTag.tag_id);

  return Object.values(entities.tags).filter(tag => tagIds.includes(tag.id));
};

export const selectNoteTag = (noteId, tagId, entities) => {
  return Object.values(entities.noteTags)
    .filter(noteTag => noteTag.note_id === noteId && noteTag.tag_id === tagId)[0];
};

export const selectTagNotes = (tagId, notes, noteTags) => {
  const tagNotes = Object.values(noteTags).filter(noteTag => noteTag.tag_id === tagId);
  const noteIds = tagNotes.map(tagNote => tagNote.note_id);

  return Object.values(notes).filter(note => noteIds.includes(note.id));
};