import axios from 'axios';
import authHeader from './authHeader';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.defaults.headers.common.Authorization = authHeader();

export default api;
