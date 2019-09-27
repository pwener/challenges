import { adminConstants } from '../actionTypes';

const admin = (state = {}, action) => {
  switch (action.type) {
    case adminConstants.REGISTER_FAIL: {
      const errors = [];

      Object.keys(action.errors).forEach((k) => {
        action.errors[k].forEach((msg) => errors.push(`${k}: ${msg}`));
      });

      return {
        errors,
      };
    }
    case adminConstants.REGISTER_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default admin;
