import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from '../store/store';

import NavBar from './app/nav_bar';
import SidebarContainer from './sidebar/sidebar_container';
import NotesContainer from './notes/notes_container';

const App = props => (
  <div>
    <NavBar />
    <SidebarContainer />
    <NotesContainer />
  </div>
);

export default App;

//For Tags:
// <Route exact path "/tags" component="{TagsOverlay}">
