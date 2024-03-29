import activitiesService from '../services/activities';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useErrorHandler from './useErrorHandler';
import { useUserValue } from '@/context/UserContext';
import { useToast } from '@/components/ui/use-toast';

const useActivities = (recordId) => {
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

  const allActivities = useQuery({
    queryKey: ['activities'],
    queryFn: activitiesService.getAll,
    refetchOnWindowFocus: true
  });

  const activitiesByUser = useQuery({
    queryKey: ['activities', userId],
    queryFn: () => activitiesService.getAllActivitiesByUser(userId),
    refetchOnWindowFocus: true
  });

  const activitiesById = useQuery({
    queryKey: ['activities', recordId],
    queryFn: () => activitiesService.getActivitiesById(recordId),
    refetchOnWindowFocus: true
  });

  const editActivityMutation = useMutation({
    mutationFn: (params) => activitiesService.updateActivity(...params),
    onSuccess: (data) => {
      queryClient.invalidateQueries('activities');

      const message = data.message;
      getToast({
        title: 'Activity Updated',
        description: message
      });
    },
    onError: (error) => {
      errorHandler(error, 'Activity Update Error');
    }
  });

  const deleteActivityMutation = useMutation({
    mutationFn: activitiesService.removeActivity,
    onSuccess: () => {
      queryClient.invalidateQueries('activities');

      getToast({
        title: 'Activity Deleted',
        description: 'Activity Deleted Successfully!'
      });
    },
    onError: (error) => {
      errorHandler(error, 'Activity Delete Error');
    }
  });

  const editActivity = (newObject, id) => {
    editActivityMutation.mutate([newObject, id]);
  };

  const removeActivity = (id) => {
    deleteActivityMutation.mutate(id);
  };

  return {
    allActivities,
    activitiesByUser,
    activitiesById,
    editActivity,
    removeActivity
  };
};

export default useActivities;
