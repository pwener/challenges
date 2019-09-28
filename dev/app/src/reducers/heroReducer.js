import { heroConstants } from '../actionTypes';
import { readAPIError } from '../helpers/error';

const hero = (state = {}, action) => {
  switch (action.type) {
    case heroConstants.FETCH_HEROES:
      return {
        ...state,
        heroes: action.heroes,
      };
    case heroConstants.ADD_HERO:
      return {
        ...state,
        heroes: [...state.heroes, action.hero],
        errors: [],
      };
    case heroConstants.ADD_HERO_FAIL: {
      return {
        ...state,
        errors: readAPIError(action.errors),
      };
    }
    default:
      return state;
  }
};

export default hero;
