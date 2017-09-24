import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import {fetchNote} from './util/note_api_util';
import {signup} from './util/session_api_util';
import {logout} from './util/session_api_util';

window.fetchNote = fetchNote;
window.signup = signup;
window.logout = logout;

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    window.store = store;
    delete window.currentUser;
  } else {
    store = configureStore();
    window.store = store;
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
