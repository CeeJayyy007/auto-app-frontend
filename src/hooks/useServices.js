import servicesService from '../services/services';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useErrorHandler from './useErrorHandler';
import { useUserValue } from '@/context/UserContext';
import { useToast } from '@/components/ui/use-toast';

const useServices = () => {
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

  const allServices = useQuery({
    queryKey: ['services'],
    queryFn: servicesService.getAll,
    refetchOnWindowFocus: true
  });

  const addServiceMutation = useMutation({
    mutationFn: (params) => servicesService.addService(...params),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['services']);

      const message = data.message;
      getToast({
        title: 'Service Created',
        description: message
      });
    },
    onError: (error) => {
      errorHandler(error, 'Add Service Error');
    }
  });

  const editServiceMutation = useMutation({
    mutationFn: (params) => servicesService.updateService(...params),
    onSuccess: (data) => {
      queryClient.invalidateQueries('services');

      const message = data.message;
      getToast({
        title: 'Service Updated',
        description: message
      });
    },
    onError: (error) => {
      errorHandler(error, 'Service Update Error');
    }
  });

  const deleteServiceMutation = useMutation({
    mutationFn: servicesService.removeService,
    onSuccess: (data) => {
      queryClient.invalidateQueries('services');

      const message = data.message;
      getToast({
        title: 'Service Deleted',
        description: 'Service Deleted Successfully'
      });
    },
    onError: (error) => {
      errorHandler(error, 'Service Delete Error');
    }
  });

  const addService = (service) => {
    addServiceMutation.mutate([service, userId]);
  };

  const editService = (service, serviceId) => {
    editServiceMutation.mutate([service, serviceId]);
  };

  const deleteService = (id) => {
    deleteServiceMutation.mutate(id);
  };

  return {
    allServices,
    addService,
    editService,
    deleteService
  };
};

export default useServices;
