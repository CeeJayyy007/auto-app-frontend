/* eslint-disable react-hooks/exhaustive-deps */
import profileService from '../services/profile';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useErrorHandler from './useErrorHandler';
import { useUserValue } from '@/context/UserContext';
import { useToast } from '@/components/ui/use-toast';

const useProfile = () => {
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
    queryFn: () => profileService.getUserDetailsById(userId)
  });

  const allUsers = useQuery({
    queryKey: ['users'],
    queryFn: profileService.getAll
  });

  const allVehicles = useQuery({
    queryKey: ['profile'],
    queryFn: profileService.getAllVehicles,
    refetchOnWindowFocus: true
  });

  const addProfileMutation = useMutation({
    mutationFn: profileService.addUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['profile']);
      queryClient.invalidateQueries(['users']);

      const message = data.message;
      getToast({
        title: 'Profile Created',
        description: message
      });
    },
    onError: (error) => {
      errorHandler(error, 'Add Profile Error');
    }
  });

  const editUserMutation = useMutation({
    mutationFn: profileService.updateUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries('profile');
      queryClient.invalidateQueries(['users']);

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
    onSuccess: () => {
      queryClient.invalidateQueries('profile');
      queryClient.invalidateQueries(['users']);

      getToast({
        title: 'Profile Updated',
        description: 'User deleted successfully'
      });
    },
    onError: (error) => {
      errorHandler(error, 'Profile Delete Error');
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

  const addProfile = (profile) => {
    addProfileMutation.mutate(profile);
  };

  const editUser = (user) => {
    editUserMutation.mutate(user);
  };

  const removeProfile = (id) => {
    removeUserMutation.mutate(id);
  };

  const editVehicle = (vehicle, vehicleId) => {
    editVehicleMutation.mutate([vehicle, vehicleId]);
  };

  const addVehicle = (vehicle) => {
    addVehicleMutation.mutate([vehicle, userId]);
  };

  const removeVehicle = (id) => {
    removeVehicleMutation.mutate(id);
  };

  return {
    allUsers,
    result,
    allVehicles,
    addProfile,
    editUser,
    editVehicle,
    addVehicle,
    removeProfile,
    removeVehicle
  };
};

export default useProfile;
