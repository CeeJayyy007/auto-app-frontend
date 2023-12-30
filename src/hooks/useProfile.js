/* eslint-disable react-hooks/exhaustive-deps */
import profileService from '../services/profile';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useErrorHandler from './useErrorHandler';

const useProfile = (navigate, userId) => {
  const queryClient = useQueryClient();
  const { errorHandler } = useErrorHandler();

  const result = useQuery({
    queryKey: ['profile', userId],
    queryFn: () => profileService.getAllUserDetails(userId),
    onSuccess: (data) => {
      queryClient.setQueryData('profile', data);
    },
    onError: (error) => {
      const message = error?.response?.data?.error || 'Something went wrong';
      errorHandler(error, 'Authentication Error', message);
    }
  });

  const editUserMutation = useMutation({
    mutationFn: profileService.updateUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries('user');
      navigate('/', { replace: true });
    },
    onError: (error) => {
      const message = error?.response?.data?.error || 'Something went wrong';

      errorHandler(error, 'Authentication Error', message);
    }
  });

  const editVehicleMutation = useMutation({
    mutationFn: profileService.updateVehicle,
    onSuccess: (data) => {
      queryClient.invalidateQueries('user');
    },
    onError: (error) => {
      const message = error?.response?.data?.error || 'Something went wrong';

      errorHandler(error, 'Authentication Error', message);
    }
  });

  const addVehicleMutation = useMutation({
    mutationFn: profileService.addVehicle,
    onSuccess: (data) => {
      queryClient.invalidateQueries('user');
    },
    onError: (error) => {
      const message = error?.response?.data?.error || 'Something went wrong';

      errorHandler(error, 'Authentication Error', message);
    }
  });

  const removeUserMutation = useMutation({
    mutationFn: profileService.removeUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries('user');
      navigate('/', { replace: true });
    },
    onError: (error) => {
      const message = error?.response?.data?.error || 'Something went wrong';

      errorHandler(error, 'Authentication Error', message);
    }
  });

  const removeVehicleMutation = useMutation({
    mutationFn: profileService.removeVehicle,
    onSuccess: (data) => {
      queryClient.invalidateQueries('user');
    },
    onError: (error) => {
      const message = error?.response?.data?.error || 'Something went wrong';

      errorHandler(error, 'Authentication Error', message);
    }
  });

  const editUser = (user) => {
    editUserMutation.mutate(user);
  };

  const editVehicle = (vehicle) => {
    editVehicleMutation.mutate(vehicle);
  };

  const addVehicle = (vehicle) => {
    addVehicleMutation.mutate(vehicle);
  };

  const removeUser = (user) => {
    removeUserMutation.mutate(user);
  };

  const removeVehicle = (vehicle) => {
    removeVehicleMutation.mutate(vehicle);
  };

  return {
    editUser,
    editVehicle,
    addVehicle,
    removeUser,
    removeVehicle,
    result
  };
};

export default useProfile;
