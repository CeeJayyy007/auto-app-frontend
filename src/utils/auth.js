import storePersist from '../store/storePersist';

export const token = `Bearer ${storePersist.get('loggedInUser')?.token}`;

console.log('token', token);

const checkAuth = async () => {
  return await !!token;
};

export default checkAuth;
