/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import authService from '../services/auth';
import { useMutation } from '@tanstack/react-query';
import useErrorHandler from './useErrorHandler';

const useAuthentication = (dispatchUser, navigate) => {
  const { errorHandler } = useErrorHandler();

  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInUser');
    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON);
      dispatchUser({ type: 'SET_USER', payload: user });
    }
  }, []);

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      window.localStorage.setItem('loggedInUser', JSON.stringify(data));
      dispatchUser({ type: 'SET_USER', payload: data });
      navigate('/', { replace: true });
    },
    onError: (error) => {
      errorHandler(error, 'Authentication Error');
    }
  });

  const registerMutation = useMutation({
    mutationFn: authService.register,
    onSuccess: (data) => {
      window.localStorage.setItem('loggedInUser', JSON.stringify(data));
      dispatchUser({ type: 'SET_USER', payload: data });
      navigate('/', { replace: true });
    },
    onError: (error) => {
      errorHandler(error, 'Authentication Error');
    }
  });

  const login = (credentials) => {
    loginMutation.mutate(credentials);
  };

  const register = (credentials) => {
    registerMutation.mutate(credentials);
  };

  const handleLogout = () => {
    window.localStorage.clear();
    dispatchUser({ type: 'LOGOUT' });
    navigate('/sign-in', { replace: true });
  };

  return { login, register, handleLogout };
};

export default useAuthentication;
