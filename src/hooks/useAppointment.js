/* eslint-disable react-hooks/exhaustive-deps */
import appointmentService from '../services/appointment';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useErrorHandler from './useErrorHandler';
import { useToast } from '@/components/ui/use-toast';
import { useUserValue } from '@/context/UserContext';

const useAppointment = () => {
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

  const getAppointmentDetails = useQuery({
    queryKey: ['appointment', userId],
    queryFn: () => appointmentService.getAppointmentDetails(userId),
    refetchOnWindowFocus: true
  });

  const addAppointmentMutation = useMutation({
    mutationFn: (params) => appointmentService.addAppointment(...params),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['appointment']);

      const message = data.message;
      getToast({
        title: 'Appointment Created',
        description: message
      });
    },
    onError: (error) => {
      errorHandler(error, 'Add Appointment Error');
    }
  });

  const editAppointmentMutation = useMutation({
    mutationFn: (params) => appointmentService.updateAppointment(...params),
    onSuccess: (data) => {
      queryClient.invalidateQueries('appointment');

      const message = data.message;
      getToast({
        title: 'Appointment Updated',
        description: message
      });
    },
    onError: (error) => {
      errorHandler(error, 'Appointment Update Error');
    }
  });

  const cancelAppointmentMutation = useMutation({
    mutationFn: appointmentService.cancelAppointment,
    onSuccess: (data) => {
      queryClient.invalidateQueries('appointment');

      const message = data.message;
      getToast({
        title: 'Appointment Canceled',
        description: message
      });
    },
    onError: (error) => {
      errorHandler(error, 'Appointment Cancel Error');
    }
  });

  const removeAppointmentMutation = useMutation({
    mutationFn: appointmentService.removeAppointment,
    onSuccess: (data) => {
      queryClient.invalidateQueries('appointment');

      const message = data.message;
      getToast({
        title: 'Appointment Deleted',
        description: message
      });
    },
    onError: (error) => {
      errorHandler(error, 'Appointment Delete Error');
    }
  });

  const editAppointment = (appointment, id) => {
    editAppointmentMutation.mutate([appointment, id]);
  };

  const addAppointment = (appointment, userId) => {
    addAppointmentMutation.mutate([appointment, userId]);
  };

  const cancelAppointment = (id) => {
    cancelAppointmentMutation.mutate(id);
  };

  const removeAppointment = (id) => {
    removeAppointmentMutation.mutate(id);
  };

  return {
    getAppointmentDetails,
    addAppointment,
    editAppointment,
    cancelAppointment,
    removeAppointment
  };
};

export default useAppointment;
