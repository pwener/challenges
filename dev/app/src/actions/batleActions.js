import { batleConstants } from '../actionTypes';
import batleServices from '../services/batleServices';
import { errorCallback } from '../helpers/error';

const fetch = () => (dispatch) => {
  batleServices.fetch()
    .then((res) => {
      dispatch({
        type: batleConstants.FETCH_BATLES,
        batles: res.data,
      });
    })
    .catch(errorCallback(dispatch));
};

const batleActions = {
  fetch,
};

export default batleActions;
