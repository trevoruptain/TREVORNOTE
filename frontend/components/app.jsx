import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from '../store/store';

import NavBar from './nav/nav_bar';
import NoteSidebarContainer from './sidebar/note_sidebar_container';
import NotesContainer from './notes/notes_container';

const App = props => (
  <div>
    <NavBar />
    <NoteSidebarContainer />
    <NotesContainer />
  </div>
);

export default App;

//For Tags:
// <Route exact path "/tags" component="{TagsOverlay}">
