export const authHeader = () => {
  const header = localStorage.getItem('auth_token');

  if (header && header.length > 0) {
      return { 'Authorization': header.token };
  } else {
      return {};
  }
}