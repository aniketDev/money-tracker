import { createStore, applyMiddleware, compose } from 'redux';
import {} from 'react-redux';
import thunkMiddleWare from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = (preloadedState) => {
  const middlewares = [thunkMiddleWare];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composeEnhancer =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const enhancers = [middlewareEnhancer];
  const composeEnhancers = composeEnhancer(...enhancers);
  const store = createStore(rootReducer, preloadedState, composeEnhancers);

  return store;
};

export default configureStore;
