import { useToast } from '@/components/ui/use-toast';
import codeMessage from '../utils/codeMessage';
import { useUserDispatch } from '@/context/UserContext';
import { useNavigate } from 'react-router-dom';
import storePersist from '@/store/storePersist';

const useErrorHandler = () => {
  const dispatchUser = useUserDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();

  const errorHandler = (error, title) => {
    const { response } = error;

    if (response && response.data.error.includes('jwt expired')) {
      storePersist.clear();
      dispatchUser({ type: 'LOGOUT' });
      navigate('/sign-in', { replace: true });
      toast({
        title: 'Session error',
        description: 'Session expired, please login again',
        variant: 'error',
        duration: 5000
      });
      return {
        success: false,
        result: null,
        message: 'Session expired, please login again'
      };
    }

    if (response && response.data.error) {
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
