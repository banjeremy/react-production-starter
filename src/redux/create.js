import { createStore as _createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducer from './modules/reducer';
import thunk from 'redux-thunk';

export default function createStore(history) {
  const reduxRouterMiddleware = routerMiddleware(history);
  return _createStore(
    reducer,
    applyMiddleware(
      reduxRouterMiddleware,
      thunk,
    )
  );
}
