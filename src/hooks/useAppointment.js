/* eslint-disable react-hooks/exhaustive-deps */
import appointmentService from '../services/appointment';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useErrorHandler from './useErrorHandler';
import { useToast } from '@/components/ui/use-toast';

const useAppointment = () => {
  const queryClient = useQueryClient();
  const { errorHandler } = useErrorHandler();
  const { toast } = useToast();

  const getToast = ({ title, description }) =>
    toast({
      title: title,
      description: description,
      variant: 'success',
      duration: 5000
    });

  const getAll = useQuery({
    queryKey: ['appointment'],
    queryFn: appointmentService.getAll,
    onSuccess: (data) => {
      queryClient.setQueryData('appointment', data);
    },
    onError: (error) => {
      errorHandler(error, 'Appointment Error');
    }
  });

  const getUserAppointmentDetailsQuery = useQuery({
    queryKey: ['appointment'],
    queryFn: ({ queryKey }) => {
      const [_, id] = queryKey;
      return appointmentService.getUserAppointmentDetailsById(id);
    },
    onSuccess: (data) => {
      queryClient.setQueryData('appointment', data);
    },
    onError: (error) => {
      errorHandler(error, 'Appointment Error');
    }
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
    mutationFn: appointmentService.updateAppointment,
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

  const getUserAppointmentDetails = (id) => {
    getUserAppointmentDetailsQuery.refetch(id);
  };

  const editAppointment = (appointment) => {
    editAppointmentMutation.mutate(appointment);
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
    getAll,
    getUserAppointmentDetails,
    addAppointment,
    editAppointment,
    cancelAppointment,
    removeAppointment
  };
};

export default useAppointment;
