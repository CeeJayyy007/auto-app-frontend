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
import { zodResolver } from '@hookform/resolvers/zod';
import { SheetClose } from '../../ui/sheet';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../../ui/select';
import { Textarea } from '../../ui/textarea';
import RecordCombobox from '../../maintenanceRecord/RecordCombobox';
import { useState } from 'react';

const ActivitiesForm = ({
  users,
  services,
  formAction,
  formValidation,
  buttonText,
  props
}) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const form = useForm({
    resolver: zodResolver(formValidation),
    defaultValues: {
      userId: '',
      vehicleId: '',
      serviceId: [],
      note: ''
    }
  });

  const handleUserChange = (value) => {
    const selectedUser = users.find((user) => user.id === parseInt(value, 10));
    setSelectedUser(selectedUser);
  };

  const getVehicleLabel = (vehicleId) => {
    if (!vehicleId) return 'Select Vehicle';

    const vehicle = selectedUser?.Vehicles.find(
      (vehicle) => vehicle.id === parseInt(vehicleId, 10)
    );
    return `${vehicle?.make} ${vehicle?.model} ${vehicle?.year}`;
  };

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
            {/* User */}
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={'sr-only'}>User</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      handleUserChange(value);
                      field.onChange(value);
                    }}
                  >
                    <FormControl>
                      <SelectTrigger
                        className={cn(!field.value && 'text-muted-foreground')}
                      >
                        <SelectValue placeholder="Select User" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {users.map((user) => (
                        <SelectItem
                          key={user.createdAt}
                          value={user.id.toString()}
                        >
                          {user?.firstName} {user?.lastName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.userId && <FormMessage />}
                </FormItem>
              )}
            />
            {/* Vehicle */}
            <FormField
              control={form.control}
              name="vehicleId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Vehicle</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    disabled={!selectedUser?.Vehicles.length}
                  >
                    <FormControl>
                      <SelectTrigger
                        className={cn(!field.value && 'text-muted-foreground')}
                        disabled={!selectedUser?.Vehicles.length}
                      >
                        <SelectValue
                          placeholder={
                            selectedUser?.Vehicles.length === 0
                              ? 'No vehicles in user profile'
                              : 'Select Vehicle'
                          }
                        >
                          {selectedUser?.Vehicles.length === 0
                            ? 'No vehicles in user profile'
                            : getVehicleLabel(field.value)}
                        </SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {selectedUser?.Vehicles.map((item) => (
                        <SelectItem key={item?.id} value={item?.id.toString()}>
                          {`${item?.make} ${item?.model} ${item?.year}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.vehicleId && <FormMessage />}
                </FormItem>
              )}
            />

            {selectedUser?.Vehicles.length === 0 && (
              <FormMessage className="mt-0">
                Add a vehicle to user profile to continue.
              </FormMessage>
            )}

            {/* Services */}
            <RecordCombobox
              data={services}
              name="services"
              form={form}
              label="Services"
              formName="serviceId"
            />

            {/* Note */}
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn('sr-only')}>Note</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter appointment note here..."
                      value={field.value}
                      disabled={form.formState.isLoading}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.note && <FormMessage />}
                </FormItem>
              )}
            />

            {/* <SheetClose asChild> */}
            <Button
              className="mt-8"
              disabled={!selectedUser?.Vehicles.length}
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

export default ActivitiesForm;
