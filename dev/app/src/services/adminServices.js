import axios from 'axios';

const url = 'http://localhost:3000';

const login = (email, password) => {
    return axios.post(`${url}/login`, { email, password })
      .then(admin => {
        localStorage.setItem('admin', JSON.stringify(admin));
      });
}

const logout = () => {
    // remove user from local storage to log user out
  localStorage.removeItem('admin');
}


export const adminService = {
  login,
  logout,
};