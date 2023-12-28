/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import authService from '../services/auth';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';

const useAuthentication = (dispatchUser, navigate) => {
  const { toast } = useToast();

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
      const message = error?.response?.data?.error || 'Something went wrong';

      toast({
        title: 'Authentication Error',
        description: message,
        variant: 'error',
        duration: 5000
      });
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
      const message = error?.response?.data?.error || 'Something went wrong';

      toast({
        title: 'Authentication Error',
        description: message,
        variant: 'error',
        duration: 5000
      });
    }
  });

  const login = (credentials) => {
    loginMutation.mutate(credentials);
  };

  const register = (credentials) => {
    registerMutation.mutate(credentials);
  };

  const handleLogout = () => {
    window.localStorage.removeItem('loggedInUser');
    dispatchUser({ type: 'LOGOUT' });
    navigate('/sign-in', { replace: true });
  };

  return { login, register, handleLogout };
};

export default useAuthentication;
