import { combineReducers } from 'redux';
import alert from './alertReducer';
import authentication from './authenticateReducer';
import admin from './adminReducer';
import hero from './heroReducer';

const rootReducer = combineReducers({
  admin,
  hero,
  alert,
  authentication,
});

export default rootReducer;
