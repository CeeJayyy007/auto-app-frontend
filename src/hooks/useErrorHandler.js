import { useToast } from '@/components/ui/use-toast';
import { useUserDispatch } from '@/context/UserContext';

const useErrorHandler = () => {
  const dispatchUser = useUserDispatch();
  const { toast } = useToast();

  const errorHandler = (error, title, message) => {
    const getToast = toast({
      title: title,
      description: message,
      variant: 'error',
      duration: 5000
    });

    if (error.includes('jwt expired')) {
      window.localStorage.removeItem('loggedInUser');
      dispatchUser({ type: 'LOGOUT' });
      getToast();
    } else {
      getToast();
    }
  };

  return { errorHandler };
};

export default useErrorHandler;
