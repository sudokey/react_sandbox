import * as redux from 'redux';
import rootReducers from './rootReducer';

export const createStore = (preloadState?: object): redux.Store => {
  const store = redux.createStore(rootReducers, preloadState);

  return store;
};
