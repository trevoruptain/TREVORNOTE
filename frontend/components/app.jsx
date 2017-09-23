import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from '../store/store';

import NavBar from './app/nav_bar';

const App = props => (
  <NavBar />
);

export default App;

//For Tags:
// <Route exact path "/tags" component="{TagsOverlay}">
