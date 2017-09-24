import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NotesContainer from './notes/notes_container';
import MainPage from './main/main_page';
import SessionPage from './session/session_page';

const App = props => (
  <Switch>
    <ProtectedRoute path="/notes/:noteId" component={NotesContainer} />
    <ProtectedRoute path="/notes" component={NotesContainer} />
    <ProtectedRoute path="/notebooks/:notebookId/notes/:noteId" component={NotesContainer} />
    <ProtectedRoute path="/add-note" component={NotesContainer} />

    <ProtectedRoute path="/notebooks/:notebookId/notes" component={NotesContainer} />
    <ProtectedRoute path="/notebooks/:notebookId" component={NotesContainer} />
    <ProtectedRoute path="/notebooks" component={NotesContainer} />

    <ProtectedRoute path="/tags/:tagId/notes/:noteId" component={NotesContainer} />
    <ProtectedRoute path="/tags/:tagId/notes" component={NotesContainer} />
    <ProtectedRoute path="/tags/:tagId" component={NotesContainer} />
    <ProtectedRoute path="/tags" component={NotesContainer} />

    <AuthRoute path="/login" component={SessionPage} />
    <AuthRoute path="/signup" component={SessionPage} />
    <AuthRoute path="/" component={MainPage} />
  </Switch>
);

export default App;
