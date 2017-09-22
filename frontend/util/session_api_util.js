export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const dummyLogin = () => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user: {email: 'coolguy3000@gmail.com', password: 'password'} }
  })
);
