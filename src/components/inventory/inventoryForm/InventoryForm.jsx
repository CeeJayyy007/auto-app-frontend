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
import { cn } from '@/lib/utils';

const InventoryForm = ({
  rowData,
  buttonText,
  formAction,
  formValidation,
  ...props
}) => {
  const { id, name, quantity, lowLevel, initialPrice, finalPrice } = rowData
    ? rowData
    : {};

  const form = useForm({
    resolver: zodResolver(formValidation),
    defaultValues: {
      name: name ? name : '',
      quantity: quantity ? quantity : '',
      lowLevel: lowLevel ? lowLevel : '',
      initialPrice: initialPrice ? initialPrice : '',
      finalPrice: finalPrice ? finalPrice : ''
    }
  });

  const onSubmit = async (data) => {
    try {
      if (rowData) {
        await formAction(data, id);
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
            {/* Quantity */}
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(!field.value && 'sr-only')}>
                    Quantity
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Quantity"
                      type="number"
                      value={field.value}
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.quantity && <FormMessage />}
                </FormItem>
              )}
            />
            {/* Low Level */}
            <FormField
              control={form.control}
              name="lowLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(!field.value && 'sr-only')}>
                    Low Level
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Low Level"
                      type="number"
                      value={field.value}
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.lowLevel && <FormMessage />}
                </FormItem>
              )}
            />
            {/* Initial Price */}
            <FormField
              control={form.control}
              name="initialPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(!field.value && 'sr-only')}>
                    Initial Price
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Initial Price"
                      type="number"
                      value={field.value}
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.initialPrice && <FormMessage />}
                </FormItem>
              )}
            />
            {/* Mark Up */}
            <FormField
              control={form.control}
              name="finalPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(!field.value && 'sr-only')}>
                    Final Price
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Final Price"
                      type="number"
                      value={field.value}
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.finalPrice && <FormMessage />}
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

export default InventoryForm;
