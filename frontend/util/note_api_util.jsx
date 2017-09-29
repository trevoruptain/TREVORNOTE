export const fetchNotes = () => (
  $.ajax({
    method: 'GET',
    url: '/api/notes'
  })
);

export const fetchNote = id => (
  $.ajax({
    method: 'GET',
    url: `/api/notes/${id}`
  })
);

export const fetchNotesByNotebook = id => (
  $.ajax({
    method: 'GET',
    url: `/api/notebooks/${id}/notes`
  })
);

export const fetchNotesByTag = id => (
  $.ajax({
    method: 'GET',
    url: `/api/tags/${id}/notes`
  })
);

export const removeNote = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/notes/${id}`
  })
);

export const createNote = note => (
  $.ajax({
    method: 'POST',
    url: '/api/notes',
    data: {note}
  })
);

export const deleteNote = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/notes/${id}`
  })
);

export const updateNote = note => (
  $.ajax({
    method: 'PATCH',
    url: `/api/notes/${note.id}`,
    data: {note}
  })
);
