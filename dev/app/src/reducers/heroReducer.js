import { heroConstants } from '../actionTypes';

const hero = (state = { heroes: [] }, action) => {
  switch (action.type) {
    case heroConstants.FETCH_HEROES: {
      return {
        heroes: action.heroes,
      };
    }
    default:
      return state;
  }
};

export default hero;
