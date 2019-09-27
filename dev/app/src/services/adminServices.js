import axios from 'axios';
import authHeader from '../helpers/authHeader';

const url = 'http://localhost:3000';

const login = (email, password) => axios.post(`${url}/login`, { email, password })
  .then((res) => {
    const admin = res.data;
    localStorage.setItem('admin', JSON.stringify(admin));
  });

const register = (admin) => axios.post(`${url}/admins`, { admin }, { headers: authHeader() });

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('admin');
};

const adminService = {
  login,
  register,
  logout,
};

export default adminService;
