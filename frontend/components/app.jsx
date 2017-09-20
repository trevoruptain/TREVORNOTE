import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import MainIndexContainer from './main/main_index_container';

const App = () => (
  <div>
    <h1>You're inside an app!</h1>
    <Switch>
      <Route path="/" component={MainIndexContainer} />
    </Switch>
  </div>
);

export default App;
