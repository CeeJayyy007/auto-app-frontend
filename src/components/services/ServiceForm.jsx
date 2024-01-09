import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import { cn } from '@/lib/utils';
import { generateDurationOptions, getDurationLabel } from '@/utils/helpers';
import { Textarea } from '../ui/textarea';

const ServiceForm = ({
  buttonText,
  formAction,
  formValidation,
  service,
  ...props
}) => {
  const form = useForm({
    resolver: zodResolver(formValidation),
    defaultValues: {
      name: service ? service.name : '',
      description: service ? service.description : '',
      price: service ? service.price : '',
      duration: service ? service.duration : ''
      // avatar: service ? '' : ''
    }
  });

  const durationOption = generateDurationOptions(30, 600, 30);

  const onSubmit = async (data) => {
    console.log('data', data);
    try {
      if (service) {
        await formAction(data, service.id);
      } else {
        await formAction(data);
      }
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
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(!field.value && 'sr-only')}>
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      value={field.value}
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.name && <FormMessage />}
                </FormItem>
              )}
            />
            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(!field.value && 'sr-only')}>
                    Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter Service Description here..."
                      value={field.value}
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.description && <FormMessage />}
                </FormItem>
              )}
            />

            {/* Price */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(!field.value && 'sr-only')}>
                    Price
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Price"
                      type="number"
                      value={field.value}
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.price && <FormMessage />}
                </FormItem>
              )}
            />

            {/* Duration */}
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn('pt-4', !field.value && 'sr-only')}>
                    Duration
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger
                        className={cn(!field.value && 'text-muted-foreground')}
                      >
                        <SelectValue placeholder="Select Duration">
                          {field.value && getDurationLabel(field.value)}
                        </SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {durationOption.map((item) => (
                        <SelectItem
                          key={item.label}
                          value={item.value.toString()}
                        >
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.duration && <FormMessage />}
                </FormItem>
              )}
            />
            {/* Avatar */}
            {/* <FormField
              control={form.control}
              name="avatar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(!field.value && 'sr-only')}>Avatar</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Service Avatar"
                      value={field.value}
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.avatar && <FormMessage />}
                </FormItem>
              )}
            /> */}

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

export default ServiceForm;
