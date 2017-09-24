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
import MainPage from './main/main_page';
import SessionPage from './session/session_page';
import App from './app';
import AddNoteContainer from './overlays/add_note_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <Switch>
        <ProtectedRoute path="/notes/:noteId" component={App} />
        <ProtectedRoute path="/notes" component={App} />
        <ProtectedRoute
          path="/notebooks/:notebookId/notes/:noteId"
          component={App}
        />
        <ProtectedRoute exact path="/add-note" component={AddNoteContainer} />
        <ProtectedRoute path="/notebooks/:notebookId/notes" component={App} />
        <ProtectedRoute path="/notebooks/:notebookId" component={App} />
        <ProtectedRoute path="/notebooks" component={App} />
        <ProtectedRoute path="/tags/:tagId/notes/:noteId" component={App} />
        <ProtectedRoute path="/tags/:tagId/notes" component={App} />
        <ProtectedRoute path="/tags/:tagId" component={App} />
        <ProtectedRoute path="/tags" component={App} />
        <AuthRoute path="/login" component={SessionPage} />
        <AuthRoute path="/signup" component={SessionPage} />
        <AuthRoute path="/" component={MainPage} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Root;
