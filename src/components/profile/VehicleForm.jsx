import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form';
import { Input } from '../ui/input';
import { zodResolver } from '@hookform/resolvers/zod';

const VehicleForm = ({
  vehicle,
  formAction,
  formValidation,
  buttonText,
  props
}) => {
  const form = useForm({
    resolver: zodResolver(formValidation),
    defaultValues: {
      make: vehicle.make || '',
      model: vehicle.model || '',
      year: parseInt(vehicle.year) || 0,
      registrationNumber: vehicle.registrationNumber || ''
    }
  });

  const onSubmit = async (data) => {
    try {
      await formAction(data, vehicle.id);
      form.reset();
    } catch (error) {
      form.setError('submitError', {
        type: 'manual',
        message: 'Submission failed. Please try again.'
      });
    }
  };

  return (
    <div className="grid gap-6" {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="make"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Make</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Make"
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.make && <FormMessage />}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Model</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Model"
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.model && <FormMessage />}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Year</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Year"
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.year && <FormMessage />}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="registrationNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Registration Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Registration Number"
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.registrationNumber && <FormMessage />}
                </FormItem>
              )}
            />

            <Button
              className="mt-8"
              disabled={form.formState.isLoading}
              type="submit"
            >
              {buttonText}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default VehicleForm;
