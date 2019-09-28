import axios from '../helpers/axios';

const fetch = () => axios.get('/heroes');

const create = (hero) => axios.post('/heroes', hero);

const heroService = {
  create,
  fetch,
};

export default heroService;
