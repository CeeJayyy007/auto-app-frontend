/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import authService from '../services/auth';
import { useMutation } from '@tanstack/react-query';
import useErrorHandler from './useErrorHandler';
import storePersist from '@/store/storePersist';

const useAuthentication = (dispatchUser, navigate) => {
  const { errorHandler } = useErrorHandler();

  useEffect(() => {
    const user = storePersist.get('loggedInUser');
    if (user) {
      dispatchUser({ type: 'SET_USER', payload: user });
    }
  }, []);

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      storePersist.set('loggedInUser', data);
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
      storePersist.set('loggedInUser', data);
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
    storePersist.clear();
    dispatchUser({ type: 'LOGOUT' });
    navigate('/sign-in', { replace: true });
  };

  return { login, register, handleLogout };
};

export default useAuthentication;
