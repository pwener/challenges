import { adminConstants } from '../actionTypes';
import { adminService } from '../services/adminServices';
import { alertActions } from './alertActions';
import { history } from '../helpers/history';

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
        dispatch(alertActions.success("Welcome to iHeroes Sr."));
        history.push('/');
      })
      .catch(err => {
        const { data } = err.response;
        const defaultMsg = 'Ops... We had some error on our servers, please try again later';
        dispatch(alertActions.error(data ? data.errors : defaultMsg));
      });
  }
}

/**
 * Destroy admin session
 */
const logout = () => {
  return dispatch => {
    adminService.logout();
    history.push('/login');
    dispatch(alertActions.clear());
    dispatch({ type: adminConstants.LOGOUT });
  }
}

export const adminActions = {
  login,
  logout,
};
