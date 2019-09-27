import { combineReducers } from 'redux';
import alert from './alertReducer';
import authentication from './authenticateReducer';
import admin from './adminReducer';

const rootReducer = combineReducers({
  admin,
  alert,
  authentication,
});

export default rootReducer;
