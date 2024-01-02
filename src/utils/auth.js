import storePersist from '../store/storePersist';

export const token = `Bearer ${storePersist.get('loggedInUser')?.token}`;

const checkAuth = async () => {
  return await !!storePersist.get('loggedInUser');
};

export default checkAuth;
