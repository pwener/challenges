import axios from '../helpers/axios';

const fetch = () => axios.get('/threats');

const fetchJustCurrent = () => axios.get('/battles');


const batleServices = {
  fetch,
  fetchJustCurrent,
};

export default batleServices;
