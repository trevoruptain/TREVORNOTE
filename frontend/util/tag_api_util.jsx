export const fetchTags = () => (
  $.ajax({
    method: 'GET',
    url: '/api/tags'
  })
);

export const fetchTag = id => (
  $.ajax({
    method: 'GET',
    url: `/api/tags/${id}`
  })
);

export const removeTag = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/tags/${id}`
  })
);

export const createTag = tag => (
  $.ajax({
    method: 'POST',
    url: '/api/tags',
    data: {tag}
  })
);

export const deleteTag = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/tags/${id}`
  })
);

export const updateTag = tag => (
  $.ajax({
    method: 'PATCH',
    url: `/api/tags/${tag.id}`,
    data: {tag}
  })
);
