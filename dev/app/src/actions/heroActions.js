import { heroConstants } from '../actionTypes';
import heroServices from '../services/heroServices';
import alertActions from './alertActions';

const fetch = () => (dispatch) => {
  heroServices.fetch()
    .then((res) => {
      dispatch({
        type: heroConstants.FETCH_HEROES,
        heroes: res.data,
      });
    })
    .catch((err) => {
      const { data } = err.response;
      const defaultMsg = 'Ops... We had some error on our servers, please try again later';
      dispatch(alertActions.error(data ? data.errors : defaultMsg));
    });
};

const heroActions = {
  fetch,
};

export default heroActions;
