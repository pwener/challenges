const authHeader = () => {
  const header = localStorage.getItem('auth_token');

  if (header && header.length > 0) {
    return { Authorization: header.token };
  }

  return {};
};

export default {
  authHeader,
};
