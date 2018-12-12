export const fetchNotebooks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/notebooks'
  })
);

export const fetchNotebook = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/notebooks/${id}`
  })
);

export const createNotebook = (notebook) => (
  $.ajax({
    method: 'POST',
    url: '/api/notebooks',
    data: { notebook }
  })
);

export const updateNotebook = (notebook) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/notebooks/${notebook.id}`,
    data: { notebook }
  })
);

export const deleteNotebook = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/notebooks/${id}`
  })
);
