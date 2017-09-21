import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NoteContainer from './note_container';
import GreetingContainer from '../greeting/greeting_container';

const NotePage = () => (
  <div>
    <h1>Cool. This is the note page.</h1>
    <GreetingContainer />
    <Switch>
      <Route path="/" component={NoteContainer} />
    </Switch>
  </div>
);

export default NotePage;
