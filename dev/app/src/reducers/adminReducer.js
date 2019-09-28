import { adminConstants } from '../actionTypes';
import { readAPIError } from '../helpers/error';

const admin = (state = {}, action) => {
  switch (action.type) {
    case adminConstants.REGISTER_FAIL: {
      return {
        errors: readAPIError(action.errors),
      };
    }
    case adminConstants.REGISTER_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default admin;
