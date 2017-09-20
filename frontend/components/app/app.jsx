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

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={NoteContainer} />
    </Switch>
  </div>
);

export default App;
