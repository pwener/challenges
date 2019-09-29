import { adminConstants } from '../actionTypes';

const strAdm = localStorage.getItem('admin');
const admin = strAdm && strAdm.length > 0 ? JSON.parse(strAdm) : null;
const initialState = admin ? { loggedIn: true, auth_token: admin.auth_token } : {};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case adminConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        admin: action.email,
      };
    case adminConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        admin: action.admin,
      };
    case adminConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authentication;
