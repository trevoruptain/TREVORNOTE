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

export const dummyLogin = () => {
  const randomNum = Math.ceil(Math.random() * 4);
  const dummyUser = masterList[randomNum];

  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user: dummyUser}
  });
};

const masterList = [{ email: "iamyourfather@deathstar.com",
                      password: "darth_vader" },
                    { email: "ihatesand@naboo.com",
                      password: "anakin_skywalker" },
                    { email: "oochowiemyhand@tatooine.com",
                      password: "luke_skywalker" },
                    { email: "organa@alderaan.com",
                      password: "princess_leia" }];
