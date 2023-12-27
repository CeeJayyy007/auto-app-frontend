const checkAuth = () => {
  const user = localStorage.getItem('loggedInUser');

  if (!user) {
    return false;
  }
  return true;
};

export default checkAuth;
