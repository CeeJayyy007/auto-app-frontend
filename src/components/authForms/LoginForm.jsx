import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Icons } from '@/components/icons/icons';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { LoginFormSchema } from './AuthValidation';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ className, login, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      // localStorage.setItem('token', JSON.stringify(data));
      // console.log('token', localStorage.getItem('token'));
      // navigate('/');
      await login(data);
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
                  {form.formState.errors.password && <FormMessage />}
                </FormItem>
              )}
            />
            <Button
              className="mt-8"
              disabled={form.formState.isLoading}
              type="submit"
            >
              Sign In
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
