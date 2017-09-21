import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBar from './nav_bar';
import NoteContainer from './note_container';

const NotePage = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/" component={NoteContainer} />
    </Switch>
  </div>
);

export default NotePage;
