import axios from 'axios';
import authHeader from './authHeader';

const createAxiosInstance = (token) => {
  const api = axios.create({
    baseURL: 'http://localhost:3000',
  });

  api.defaults.headers.common.Authorization = token;

  return api;
};

const api = createAxiosInstance(authHeader());

export default api;
