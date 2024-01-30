import storePersist from '../store/storePersist';

export const token = `Bearer ${storePersist.get('loggedInUser')?.token}`;

console.log('token', token);

const checkAuth = () => {
  const loggedInUser = storePersist.get('loggedInUser');

  if (loggedInUser) {
    return true;
  }

  return false;
};
export default checkAuth;
