import axios from '../helpers/axios';

const fetch = () => axios.get('/threats');

const batleServices = {
  fetch,
};

export default batleServices;
