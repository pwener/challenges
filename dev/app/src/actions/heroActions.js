import { heroConstants } from '../actionTypes';
import heroServices from '../services/heroServices';
import { errorCallback } from '../helpers/error';
import alertActions from './alertActions';

const fetch = () => (dispatch) => {
  heroServices.fetch()
    .then((res) => {
      dispatch({
        type: heroConstants.FETCH_HEROES,
        heroes: res.data,
      });
    })
    .catch(errorCallback(dispatch));
};

const add = (hero, location) => (dispatch) => {
  const heroParam = {
    hero: {
      ...hero,
      location_attributes: location,
    },
  };

  heroServices.create(heroParam)
    .then((res) => {
      dispatch({
        type: heroConstants.ADD_HERO,
        hero: res.data,
      });
      dispatch(alertActions.success('Hero registered with success!'));
    }).catch((err) => {
      if (err.response) {
        const { data } = err.response;
        // backend validations
        if (err.response.status === 422) {
          dispatch({
            type: heroConstants.ADD_HERO_FAIL,
            errors: data.errors,
          });
        } else {
          dispatch({
            type: heroConstants.ADD_HERO_FAIL,
            errors: { form: ['Invalid data in form...'] },
          });
        }
      }
    });
};

const heroActions = {
  add,
  fetch,
};

export default heroActions;
