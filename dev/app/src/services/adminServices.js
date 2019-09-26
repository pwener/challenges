import { authHeader } from '../helpers';
import axios from 'axios';

const url = 'http://localhost:3000';

const login = (username, password) => {
    return axios.post(`${url}/login`, { username, password })
      .then(auth_token => {
        localStorage.setItem('auth_token', auth_token);
      });
}

const logout = () => {
    // remove user from local storage to log user out
  localStorage.removeItem('auth_token');
}


export const adminService = {
  login,
  logout,
};