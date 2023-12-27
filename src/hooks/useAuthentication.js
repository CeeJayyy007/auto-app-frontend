import { useEffect } from 'react';
import loginService from '../services/login';
import { useMutation } from '@tanstack/react-query';

const useAuthentication = (dispatchUser, setNotification, navigate) => {
  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser');
    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON);
      dispatchUser({ type: 'SET_USER', payload: user });
    }
  }, []);

  const loginMutation = useMutation({
    mutationFn: loginService.login,
    onSuccess: (data) => {
      window.localStorage.setItem('loggedInUser', JSON.stringify(data));
      dispatchUser({ type: 'SET_USER', payload: data });
      navigate('/', { replace: true });
    },
    onError: (error) => {
      setNotification('Wrong username or password', true);
    }
  });

  const login = (credentials) => {
    loginMutation.mutate(credentials);
  };

  const handleLogout = () => {
    window.localStorage.removeItem('loggedInUser');
    dispatchUser({ type: 'LOGOUT' });
    navigate('/sign-in', { replace: true });
  };

  return { login, handleLogout };
};

export default useAuthentication;
