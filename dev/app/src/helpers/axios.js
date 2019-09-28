import axios from 'axios';
import authHeader from './authHeader';

const createAxiosInstance = (token) => {
  const api = axios.create({
    baseURL: 'http://localhost:3000',
  });

  api.interceptors.response.use((response) => response,
    (error) => {
      if (error && error.response) {
        if (error.response.status === 401) {
          window.location.reload(true);
        }
      }
      return Promise.reject(error);
    });

  api.defaults.headers.common.Authorization = token;

  return api;
};

const api = createAxiosInstance(authHeader());

export default api;
