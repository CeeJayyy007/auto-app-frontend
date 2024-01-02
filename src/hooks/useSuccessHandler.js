import { useToast } from '@/components/ui/use-toast';
import codeMessage from '../utils/codeMessage';

const useSuccessHandler = () => {
  const { toast } = useToast();

  const successHandler = (
    title,
    response,
    options = { notifyOnSuccess: false, notifyOnFailed: true }
  ) => {
    const { data } = response;
    if (data && data.success === true) {
      const message = response.data && data.message;
      const successText = message || codeMessage[response.status];

      if (options.notifyOnSuccess) {
        toast({
          title: title,
          description: successText,
          variant: 'success',
          duration: 5000
        });
      }
    } else {
      const message = response.data && data.message;
      const errorText = message || codeMessage[response.status];
      const { status } = response;
      if (options.notifyOnFailed) {
        toast({
          title: title,
          description: errorText,
          variant: 'success',
          duration: 5000
        });
      }
    }
  };

  return { successHandler };
};

export default useSuccessHandler;
