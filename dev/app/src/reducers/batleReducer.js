import { batleConstants } from '../actionTypes';

const initialState = {
  batles: [],
};

const batle = (state = initialState, action) => {
  switch (action.type) {
    case batleConstants.FETCH_BATLES:
      return {
        ...state,
        batles: action.batles,
      };
    default:
      return state;
  }
};

export default batle;
