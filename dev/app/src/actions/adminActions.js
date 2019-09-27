import { adminConstants } from '../actionTypes';
import adminService from '../services/adminServices';
import alertActions from './alertActions';
import history from '../helpers/history';

/**
 * When admin request to login
 */
const login = (email, password) => (dispatch) => {
  dispatch({
    type: adminConstants.LOGIN_REQUEST,
    email,
  });

  adminService.login(email, password)
    .then(() => {
      dispatch(alertActions.success('Welcome to iHeroes Sr.'));
      history.push('/');
    })
    .catch((err) => {
      const { data } = err.response;
      const defaultMsg = 'Ops... We had some error on our servers, please try again later';
      dispatch(alertActions.error(data ? data.errors : defaultMsg));
    });
};

/**
 * Destroy admin session
 */
const logout = () => (dispatch) => {
  adminService.logout();
  history.push('/login');
  dispatch(alertActions.clear());
  dispatch({ type: adminConstants.LOGOUT });
};

const register = (admin) => (dispatch) => {
  adminService.register(admin)
    .then(() => {
      dispatch({ type: adminConstants.REGISTER_SUCCESS });
      dispatch(alertActions.success('Admin registered with success'));
    })
    .catch((err) => {
      const { data } = err.response;
      // backend validations
      if (err.response.status === 422) {
        dispatch({
          type: adminConstants.REGISTER_FAIL,
          errors: data.errors,
        });
      } else {
        dispatch(alertActions.error(data.errors));
      }
    });
};

const adminActions = {
  login,
  logout,
  register,
};

export default adminActions;
