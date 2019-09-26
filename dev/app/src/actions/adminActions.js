import { adminConstants } from '../actionTypes';
import { adminService } from '../services';
import { alertActions } from './alertActions';
import { history } from '../helpers';

/**
 * When admin request to login
 */
const login = (email, password) => {
  return dispatch => {
    dispatch({
      type: adminConstants.LOGIN_REQUEST,
      email,
    });

    adminService.login(email, password)
      .then(() => {
        // dispatch({ type: adminConstants.LOGIN_SUCCESS, data });
        history.push('/');
      })
      .catch(err => {
        dispatch({ type: adminConstants.LOGIN_FAILURE, err});
        dispatch(alertActions.error(err));
      });
  }
}

/**
 * Destroy admin session
 */
const logout = () => {
  adminService.logout();
  return { type: adminConstants.LOGOUT };
}

export const userActions = {
  login,
  logout,
};
