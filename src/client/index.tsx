import { Provider } from 'react-redux';
import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from '../store';
import App from '../app';

const appContainer = document.querySelector('.app-container');
const store = createStore();

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  appContainer,
);
