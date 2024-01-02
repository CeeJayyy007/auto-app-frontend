import { useToast } from '@/components/ui/use-toast';
import codeMessage from '../utils/codeMessage';
// import { useUserDispatch } from '@/context/UserContext';

const useErrorHandler = () => {
  //   const dispatchUser = useUserDispatch();
  const { toast } = useToast();

  const errorHandler = (error, title) => {
    // if (error.includes('jwt expired')) {
    //   window.localStorage.removeItem('loggedInUser');
    //   dispatchUser({ type: 'LOGOUT' });
    //   getToast();
    // } else {
    //   getToast();
    // }
    // };

    const { response } = error;

    if (response.data && response.data.jwtExpired) {
      const result = window.localStorage.getItem('auth');
      const jsonFile = window.localStorage.getItem('isLogout');
      const { isLogout } = (jsonFile && JSON.parse(jsonFile)) || false;
      window.localStorage.removeItem('auth');
      window.localStorage.removeItem('isLogout');
      if (result || isLogout) {
        window.location.href = '/logout';
      }
    }

    if (response && response.status) {
      const message = response.data && response.data.message;

      const errorText = message || codeMessage[response.status];
      // const { status } = response;
      toast({
        title: title,
        description: errorText,
        variant: 'error',
        duration: 5000
      });

      return response.data;
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
