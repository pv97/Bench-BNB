import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {login, signup, logout} from './util/session_api_util';
import {requestBenches} from './actions/bench_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.requestBenches = requestBenches;

  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
  window.store = store;
});
