import { useForm } from 'react-hook-form';
import { Button } from '../../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../../ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Input } from '../../ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { SheetClose } from '../../ui/sheet';
import { cn } from '@/lib/utils';

const UserForm = ({ user, formAction, formValidation, buttonText, props }) => {
  const { firstName, lastName, email, phone, username, roles } = user
    ? user
    : {};

  const form = useForm({
    resolver: zodResolver(formValidation),
    defaultValues: {
      firstName: firstName ? firstName : '',
      lastName: lastName ? lastName : '',
      email: email ? email : '',
      phone: phone ? phone : '',
      username: username ? username : '',
      roles: roles ? roles : ''
    }
  });

  const onSubmit = async (data) => {
    try {
      await formAction(data);
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
                  <FormLabel className={cn(!field.value && 'sr-only')}>
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First Name"
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
                  <FormLabel className={cn(!field.value && 'sr-only')}>
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(!field.value && 'sr-only')}>
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Username"
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.username && <FormMessage />}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(!field.value && 'sr-only')}>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(!field.value && 'sr-only')}>
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Phone Number"
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
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(!field.value && 'sr-only')}>
                    Role
                  </FormLabel>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        className={cn(!field.value && 'text-muted-foreground')}
                      >
                        <SelectValue placeholder="Select Role">
                          {field.value}
                        </SelectValue>
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="User">User</SelectItem>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Super Admin">Super Admin</SelectItem>
                    </SelectContent>
                  </Select>

                  {form.formState.errors.roles && <FormMessage />}
                </FormItem>
              )}
            />
            {/* <SheetClose asChild> */}
            <Button
              className="mt-8"
              disabled={form.formState.isLoading}
              type="submit"
            >
              {buttonText}
            </Button>
            {/* </SheetClose> */}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UserForm;
