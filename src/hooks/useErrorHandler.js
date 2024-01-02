import { useToast } from '@/components/ui/use-toast';
import codeMessage from '../utils/codeMessage';
import { useUserDispatch } from '@/context/UserContext';

const useErrorHandler = () => {
  const dispatchUser = useUserDispatch();
  const { toast } = useToast();

  const errorHandler = (error, title) => {
    const { response } = error;

    console.log('error', error);

    if (response.data && response.data.jwtExpired) {
      const result = window.localStorage.getItem('loggedInUser');
      window.localStorage.clear();
      if (result) {
        dispatchUser({ type: 'LOGOUT' });
      }
    }

    if (response && response.status) {
      const message = response.data && response.data.error;

      const errorText = message || codeMessage[response.status];
      toast({
        title: title,
        description: errorText,
        variant: 'error',
        duration: 5000
      });
    } else {
      if (navigator.onLine) {
        // Code to execute when there is internet connection
        toast({
          title: 'Problem connecting to server',
          description: 'Cannot connect to the server, Try again later',
          variant: 'error',
          duration: 5000
        });
        return {
          success: false,
          result: null,
          message: 'Cannot connect to the server, Check your internet network'
        };
      } else {
        // Code to execute when there is no internet connection
        toast({
          title: 'Problem connecting to server',
          description: 'Cannot connect to the server, Try again later',
          variant: 'error',
          duration: 5000
        });
        return {
          success: false,
          result: null,
          message: 'Cannot connect to the server, Check your internet network'
        };
      }
    }
  };

  return { errorHandler };
};

export default useErrorHandler;
