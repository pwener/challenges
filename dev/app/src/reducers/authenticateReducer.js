import { adminConstants } from '../actionTypes';

let token = localStorage.getItem('auth_token');
const initialState = token ? { loggedIn: true, token } : {};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case adminConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        admin: action.email
      };
    case adminConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        admin: action.admin
      };
    case adminConstants.LOGOUT:
      return {};
    default:
      return state
  }
}