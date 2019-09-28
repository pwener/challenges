const authHeader = () => {
  const admin = localStorage.getItem('admin');

  if (admin && admin.length > 0) {
    return JSON.parse(admin).auth_token;
  }
  return null;
};

export default authHeader;
