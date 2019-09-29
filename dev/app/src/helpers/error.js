import alertActions from '../actions/alertActions';

/**
 * Used in axios to treat generical errors
 * @param {*} dispatch action should pass dispatch
 */
const errorCallback = (dispatch) => (err) => {
  if (err.response) {
    const { data } = err.response;
    if (err.response.status === 401) {
      localStorage.setItem('admin', '');
    }
    const prove = Object.values(err.response.headers).find((e) => e === 'json');
    const defaultMsg = data && prove ? data.errors
      : 'Ops... Something is wrong, please try again later';
    dispatch(alertActions.error(defaultMsg));
  }
};

const readAPIError = (errors) => {
  const e = [];

  Object.keys(errors).forEach((k) => {
    errors[k].forEach((msg) => e.push(`${k}: ${msg}`));
  });

  return e;
};

export {
  errorCallback,
  readAPIError,
};
