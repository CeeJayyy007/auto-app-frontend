/* eslint-disable react-hooks/exhaustive-deps */
import profileService from '../services/profile';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useErrorHandler from './useErrorHandler';
import { useToast } from '@/components/ui/use-toast';
import { useEffect } from 'react';

const useProfile = (navigate, userId, selectedVehicle) => {
  const queryClient = useQueryClient();
  const { errorHandler } = useErrorHandler();
  const { toast } = useToast();

  //   useEffect(() => {
  //     if (selectedVehicle) {
  //       queryClient.setQueryData('selectedVehicle', selectedVehicle);
  //     }
  //   }, [selectedVehicle]);

  const getToast = ({ title, description }) =>
    toast({
      title: title,
      description: description,
      variant: 'success',
      duration: 5000
    });

  const result = useQuery({
    queryKey: ['profile', userId],
    queryFn: () => profileService.getAllUserDetails(userId),
    onSuccess: (data) => {
      queryClient.setQueryData('profile', data);
    },
    onError: (error) => {
      const message = error?.response?.data?.error || 'Something went wrong';
      errorHandler(error, 'Profile Update Error', message);
    }
  });

  const editUserMutation = useMutation({
    mutationFn: profileService.updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries('profile');
      getToast('Profile Updated', 'Your profile has been updated');
    },
    onError: (error) => {
      const message = error?.response?.data?.error || 'Something went wrong';
      errorHandler(error, 'Profile Update Error', message);
    }
  });

  const editVehicleMutation = useMutation({
    mutationFn: (params) => profileService.updateVehicle(...params),
    onSuccess: (data) => {
      queryClient.invalidateQueries('profile');
      getToast({
        title: 'Profile Updated',
        description: 'Vehicle updated'
      });
    },
    onError: (error) => {
      const message = error?.response?.data?.error || 'Something went wrong';
      errorHandler(error, 'Vehicle Edit Error', message);
    }
  });

  const addVehicleMutation = useMutation({
    mutationFn: (params) => profileService.addVehicle(...params),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['profile']);
      getToast({
        title: 'Profile Updated',
        description: 'Vehicle added to your profile'
      });
    },
    onError: (error) => {
      const message = error?.response?.data?.error || 'Something went wrong';
      errorHandler(error, 'Add Vehicle Error', message);
    }
  });

  const removeUserMutation = useMutation({
    mutationFn: profileService.removeUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries('profile');
      navigate('/', { replace: true });
    },
    onError: (error) => {
      const message = error?.response?.data?.error || 'Something went wrong';
      errorHandler(error, 'Profile Update Error', message);
    }
  });

  const removeVehicleMutation = useMutation({
    mutationFn: profileService.removeVehicle,
    onSuccess: () => {
      queryClient.invalidateQueries('profile');
      getToast({
        title: 'Profile Updated',
        description: 'Vehicle deleted from your profile'
      });
    },
    onError: (error) => {
      const message = error?.response?.data?.error || 'Something went wrong';
      errorHandler(error, 'Delete Vehicle Error', message);
    }
  });

  const editUser = (user) => {
    editUserMutation.mutate(user);
  };

  const editVehicle = (vehicle, vehicleId) => {
    editVehicleMutation.mutate([vehicle, vehicleId]);
  };

  const addVehicle = (vehicle) => {
    addVehicleMutation.mutate([vehicle, userId]);
  };

  const removeUser = (user) => {
    removeUserMutation.mutate(user);
  };

  const removeVehicle = (id) => {
    removeVehicleMutation.mutate(id);
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
