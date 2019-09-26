import { alertConstants } from '../actionTypes';

const success = (message) => ({
  type: alertConstants.SUCCESS,
  message,
});

const error = (message) => ({
  type: alertConstants.ERROR,
  message,
});

const clear = () => ({
  type: alertConstants.CLEAR,
});

const alertActions = {
  success,
  error,
  clear,
};

export default alertActions;
