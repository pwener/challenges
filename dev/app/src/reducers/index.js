import { combineReducers } from 'redux';
import alert from './alertReducer';
import authentication from './authenticateReducer';
import admin from './adminReducer';
import hero from './heroReducer';
import batle from './batleReducer';

const rootReducer = combineReducers({
  admin,
  hero,
  batle,
  alert,
  authentication,
});

export default rootReducer;
