const authHeader = () => {
  const admin = localStorage.getItem('admin');

  if (admin && admin.length > 0) {
    const token = JSON.parse(admin).auth_token;
    return { Authorization: token };
  }

  return {};
};

export default authHeader;
