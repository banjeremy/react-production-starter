import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import greeting from './greeting';

export default combineReducers({
  routing: routerReducer,
  counter,
  greeting,
});
