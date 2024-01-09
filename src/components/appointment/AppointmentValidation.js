import * as z from 'zod';

const AddAppointmentFormSchema = z.object({
  date: z
    .date({
      required_error: 'Appointment date is required.'
    })
    .min(new Date(), 'Appointment date must be in the future'),
  time: z
    .string({
      required_error: 'Appointment time is required.'
    })
    .min(1, 'Must select a time'),
  vehicleId: z.coerce
    .number({
      required_error: 'Vehicle is required.'
    })
    .min(1, 'Must select a vehicle'),
  serviceId: z
    .array(z.coerce.number())
    .min(1, 'Must select at least 1 service'),
  note: z
    .string()
    .min(2, 'Must be at least 2 characters')
    .max(500, 'Must be less than 500 characters')
});

const EditAppointmentFormSchema = z
  .object({
    date: z.date({
      required_error: 'Appointment date is required.'
    }),
    time: z.string({
      required_error: 'Appointment time is required.'
    }),
    vehicleId: z.coerce.number({
      required_error: 'Vehicle is required.'
    }),
    serviceId: z
      .array(z.coerce.number())
      .min(1, 'Must select at least 1 service'),
    note: z
      .string()
      .min(2, 'Must be at least 2 characters')
      .max(500, 'Must be less than 500 characters')
  })
  .optional();

export { AddAppointmentFormSchema, EditAppointmentFormSchema };
