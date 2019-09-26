import { alertConstants } from '../actionTypes';

const alert = (state = null, action) => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        color: 'blue',
        message: action.message,
      };
    case alertConstants.ERROR:
      return {
        color: 'red',
        message: action.message,
      };
    case alertConstants.CLEAR:
      return null;
    default:
      return state;
  }
};

export default alert;
