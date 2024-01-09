import inventoryService from '../services/inventory';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useErrorHandler from './useErrorHandler';
import { useUserValue } from '@/context/UserContext';
import { useToast } from '@/components/ui/use-toast';

const useInventory = () => {
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

  const allInventory = useQuery({
    queryKey: ['inventory'],
    queryFn: inventoryService.getAll,
    refetchOnWindowFocus: true
  });

  const addInventoryMutation = useMutation({
    mutationFn: (params) => inventoryService.addInventory(...params),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['inventory']);

      const message = data.message;
      getToast({
        title: 'Inventory Created',
        description: message
      });
    },
    onError: (error) => {
      errorHandler(error, 'Add Inventory Error');
    }
  });

  const editInventoryMutation = useMutation({
    mutationFn: (params) => inventoryService.updateInventory(...params),
    onSuccess: (data) => {
      queryClient.invalidateQueries('inventory');

      const message = data.message;
      getToast({
        title: 'Inventory Updated',
        description: message
      });
    },
    onError: (error) => {
      errorHandler(error, 'Inventory Update Error');
    }
  });

  const deleteInventoryMutation = useMutation({
    mutationFn: inventoryService.removeInventory,
    onSuccess: (data) => {
      queryClient.invalidateQueries('inventory');

      const message = data.message;
      getToast({
        title: 'Inventory Deleted',
        description: 'Inventory Deleted Successfully'
      });
    },
    onError: (error) => {
      errorHandler(error, 'Inventory Delete Error');
    }
  });

  const addInventory = (inventory) => {
    addInventoryMutation.mutate([inventory, userId]);
  };

  const editInventory = (inventory, id) => {
    editInventoryMutation.mutate([inventory, id]);
  };

  const deleteInventory = (id) => {
    deleteInventoryMutation.mutate(id);
  };

  return {
    allInventory,
    addInventory,
    editInventory,
    deleteInventory
  };
};

export default useInventory;
