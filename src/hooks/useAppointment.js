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

  const appointmentsDetails = useQuery({
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

  const createServiceRequestMutation = useMutation({
    mutationFn: appointmentService.createRequest,
    onSuccess: (data) => {
      queryClient.invalidateQueries('appointment');

      const message = data.message;
      getToast({
        title: 'Service Request Created',
        description: message
      });
    },
    onError: (error) => {
      errorHandler(error, 'Service Request Error');
    }
  });

  const removeAppointmentMutation = useMutation({
    mutationFn: appointmentService.removeAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries('appointment');

      getToast({
        title: 'Appointment Deleted',
        description: 'Appointment Deleted Successfully'
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

  const createServiceRequest = (appointment) => {
    createServiceRequestMutation.mutate(appointment);
  };

  const removeAppointment = (id) => {
    removeAppointmentMutation.mutate(id);
  };

  return {
    appointmentsDetails,
    addAppointment,
    editAppointment,
    createServiceRequest,
    removeAppointment
  };
};

export default useAppointment;
