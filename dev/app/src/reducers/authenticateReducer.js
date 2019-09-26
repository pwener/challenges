import { adminConstants } from '../actionTypes';

let admin = JSON.parse(localStorage.getItem('admin'));
const initialState = admin ? { loggedIn: true, auth_token: admin.auth_token } : {};

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