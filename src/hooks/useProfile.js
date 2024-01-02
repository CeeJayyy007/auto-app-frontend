/* eslint-disable react-hooks/exhaustive-deps */
import profileService from '../services/profile';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useErrorHandler from './useErrorHandler';
import { useUserValue } from '@/context/UserContext';
import { useToast } from '@/components/ui/use-toast';

const useProfile = (navigate) => {
  const queryClient = useQueryClient();
  const { errorHandler } = useErrorHandler();
  const { toast } = useToast();

  const userId = useUserValue()?.id;

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
      errorHandler(error, 'Profile Update Error');
    }
  });

  const editUserMutation = useMutation({
    mutationFn: profileService.updateUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries('profile');

      const message = data.message;
      getToast({
        title: 'Profile Updated',
        description: message
      });
    },
    onError: (error) => {
      errorHandler(error, 'Profile Update Error');
    }
  });

  const editVehicleMutation = useMutation({
    mutationFn: (params) => profileService.updateVehicle(...params),
    onSuccess: (data) => {
      queryClient.invalidateQueries('profile');

      const message = data.message;
      getToast({
        title: 'Profile Updated',
        description: message
      });
    },
    onError: (error) => {
      errorHandler(error, 'Vehicle Edit Error');
    }
  });

  const addVehicleMutation = useMutation({
    mutationFn: (params) => profileService.addVehicle(...params),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['profile']);

      const message = data.message;
      getToast({
        title: 'Profile Updated',
        description: message
      });
    },
    onError: (error) => {
      errorHandler(error, 'Add Vehicle Error');
    }
  });

  const removeUserMutation = useMutation({
    mutationFn: profileService.removeUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries('profile');

      const message = data.message;
      getToast({
        title: 'Profile Updated',
        description: message
      });
      navigate('/', { replace: true });
    },
    onError: (error) => {
      errorHandler(error, 'Profile Update Error');
    }
  });

  const removeVehicleMutation = useMutation({
    mutationFn: profileService.removeVehicle,
    onSuccess: () => {
      queryClient.invalidateQueries('profile');

      getToast({
        title: 'Profile Updated',
        description: 'Vehicle deleted successfully'
      });
    },
    onError: (error) => {
      errorHandler(error, 'Delete Vehicle Error');
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
