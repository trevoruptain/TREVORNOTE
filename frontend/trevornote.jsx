import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import configureStore from './store/store';
import MainPage from './components/main/main_page';
import SessionPage from './components/session/session_page';
import App from './components/app/app';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path="/" component={ MainPage } />
        <Route path="/login" component={ SessionPage } />
        <Route path="/signup" component={ SessionPage } />
        <Route path="/trevornote" component={ App } />
      </div>
    </HashRouter>
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);
});
