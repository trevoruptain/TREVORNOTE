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
import store from '../store/store';

import MainPage from './main/main_page';
import SessionPage from './session/session_page';
import NotePage from './app/note_page';

const App = () => (
  <Switch>
    <AuthRoute path="/login" component={ SessionPage } />
    <AuthRoute path="/signup" component={ SessionPage } />
    <ProtectedRoute path="/trevornote" component={ NotePage } />
    <Route exact path="/" component={ MainPage } />
  </Switch>
);

export default App;
