import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/icons';
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
import { CreateAccountFormSchema } from './AuthValidation';

const CreateAccountForm = ({ className, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(CreateAccountFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      userName: '',
      phone: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
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
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      autoCapitalize="words"
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.firstName && <FormMessage />}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      autoCapitalize="words"
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.lastName && <FormMessage />}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Username"
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.userName && <FormMessage />}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Phone Number"
                      type="tel"
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.phone && <FormMessage />}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      type="email"
                      autoComplete="email"
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.email && <FormMessage />}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Password</FormLabel>
                  <FormControl>
                    <div className="flex relative items-center">
                      <Button
                        className="absolute inset-y-0 right-0 hover:bg-transparent"
                        variant="ghost"
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Icons.eyeClose /> : <Icons.eyeOpen />}
                      </Button>
                      <Input
                        placeholder="Password"
                        type={showPassword ? 'text' : 'password'}
                        disabled={form.formState.isLoading}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  {form.formState.errors.password?.message && (
                    <ul className="mt-2 text-[0.8rem] font-medium text-destructive">
                      {Object.keys(form.formState.errors.password.message).map(
                        (m, i) => {
                          const { pass, message } =
                            form.formState.errors.password.message[m];

                          return (
                            <li key={i}>
                              <span>{pass ? '✅' : '❌'}</span>
                              <span>{message}</span>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  )}
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={form.formState.isLoading}
              className="mt-8"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateAccountForm;
