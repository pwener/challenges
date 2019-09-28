import axios from '../helpers/axios';

const fetch = () => axios.get('/heroes');

const heroService = {
  fetch,
};

export default heroService;
