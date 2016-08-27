import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducer from './modules/reducer';
import thunk from 'redux-thunk';

export default function (history) {
  const reduxRouterMiddleware = routerMiddleware(history);
  const store = createStore(
    reducer,
    applyMiddleware(
      reduxRouterMiddleware,
      thunk,
    )
  );

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer').default);
    });
  }

  return store;
}
