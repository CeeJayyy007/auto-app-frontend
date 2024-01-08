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
import { SheetClose } from '../ui/sheet';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import { generateTimeOptions } from '@/utils/helpers';
import { Textarea } from '../ui/textarea';
import RecordCombobox from '../maintenanceRecord/RecordCombobox';
import { useState } from 'react';

const AppointmentForm = ({
  userId,
  vehicles,
  services,
  rowData,
  formAction,
  formValidation,
  buttonText,
  props
}) => {
  const rowAppointmentData = rowData ? rowData : {};
  const {
    id,
    date,
    time,
    vehicle,
    vehicleId,
    services: selectedServices,
    serviceId,
    note
  } = rowAppointmentData;

  const form = useForm({
    resolver: zodResolver(formValidation),
    defaultValues: {
      date: date ? new Date(date) : '',
      time: time ? time : '',
      vehicleId: vehicle ? vehicleId : '',
      serviceId: selectedServices ? serviceId : [],
      note: note ? note : ''
    }
  });

  const [open, setOpen] = useState(false);
  const timeOptions = generateTimeOptions();

  const onSubmit = async (data) => {
    try {
      console.log('data', data);
      if (rowAppointmentData?.id) {
        await formAction(data, id);
      } else {
        await formAction(data, userId);
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
            {/* Date */}
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="sr-only">Appointment Date</FormLabel>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Appointment date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="end">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                      <Button
                        variant="outline"
                        className="text-center  mb-4 ml-4 "
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </Button>
                    </PopoverContent>
                  </Popover>
                  {form.formState.errors.date && <FormMessage />}
                </FormItem>
              )}
            />
            {/* Time */}
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Time</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value ? field.value : ''}
                  >
                    <FormControl>
                      <SelectTrigger
                        className={cn(!field.value && 'text-muted-foreground')}
                      >
                        <SelectValue placeholder="Select Time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {timeOptions.map((item) => (
                        <SelectItem key={item.label} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {form.formState.errors.time && <FormMessage />}
                </FormItem>
              )}
            />
            {/* Vehicle */}
            <FormField
              control={form.control}
              name="vehicleId"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="sr-only">Vehicle</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ? field.value.toString() : ''}
                    >
                      <FormControl>
                        <SelectTrigger
                          className={cn(
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          <SelectValue placeholder="Select Vehicle">
                            {vehicle && vehicle}
                          </SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {vehicles.map((item) => (
                          <SelectItem key={item.id} value={item.id.toString()}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {form.formState.errors.vehicleId && <FormMessage />}
                  </FormItem>
                );
              }}
            />

            {/* Services */}
            <RecordCombobox
              data={services}
              name="services"
              rowData={rowData}
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
                  <FormLabel className="sr-only">Note</FormLabel>
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

export default AppointmentForm;
