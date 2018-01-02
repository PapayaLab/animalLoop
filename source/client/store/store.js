import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import history from './history';
import reducer from '../reducers/index';

const middleware = routerMiddleware(history);

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
  combineReducers({
    reducer, /* preloadedState, */
    router: routerReducer,
  }),
  composeEnhancers(
    applyMiddleware(
      thunk,
      middleware),
  ));

export default store;
