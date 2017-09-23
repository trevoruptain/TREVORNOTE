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