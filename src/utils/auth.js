export const token = `Bearer ${
  JSON.parse(window.localStorage.getItem('loggedInUser'))?.token
}`;

const checkAuth = async () => {
  return await !!localStorage.getItem('loggedInUser');
};

export default checkAuth;
