const checkAuth = async () => {
  return await !!localStorage.getItem('loggedInUser');
};

export default checkAuth;
