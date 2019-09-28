import axios from '../helpers/axios';

const login = (email, password) => axios.post('/login', { email, password })
  .then((res) => {
    const admin = res.data;
    localStorage.setItem('admin', JSON.stringify(admin));
  });

const register = (admin) => axios.post('/admins', { admin });

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
