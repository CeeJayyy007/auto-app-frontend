import * as z from 'zod';

const AddAppointmentSchema = z.object({
  date: z.string().min(10, 'Must be at least 10 characters'),
  time: z.string().min(5, 'Must be at least 5 characters'),
  vehicle: z.array(z.string()).min(1, 'Must select at least 1 vehicle'),
  services: z.array(z.string()).min(1, 'Must select at least 1 service'),
  note: z
    .string()
    .min(2, 'Must be at least 2 characters')
    .max(500, 'Must be less than 500 characters')
});

const EditAppointmentSchema = z
  .object({
    date: z.string().min(10, 'Must be at least 10 characters'),
    time: z.string().min(5, 'Must be at least 5 characters'),
    vehicle: z.array(z.string()).min(1, 'Must select at least 1 vehicle'),
    services: z.array(z.string()).min(1, 'Must select at least 1 service'),
    note: z
      .string()
      .min(2, 'Must be at least 2 characters')
      .max(500, 'Must be less than 500 characters')
  })
  .partials();

export default { AddAppointmentSchema, EditAppointmentSchema };
