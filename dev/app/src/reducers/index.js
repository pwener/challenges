import { combineReducers } from 'redux';
import { alert } from './alertReducer';
import { authentication } from './authenticateReducer';

export const rootReducer = combineReducers({
  alert,
  authentication,
});