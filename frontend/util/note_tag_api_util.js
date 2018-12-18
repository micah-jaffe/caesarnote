export const fetchNoteTags = () => (
  $.ajax({
    method: 'GET',
    url: '/api/note_tags'
  })
);

export const createNoteTag = (note_tag) => (
  $.ajax({
    method: 'POST',
    url: '/api/note_tags',
    data: { note_tag }
  })
);

export const deleteNoteTag = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/note_tags/${id}`
  })
);
