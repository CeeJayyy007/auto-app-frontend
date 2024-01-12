import * as z from 'zod';

const ActivitiesFormSchema = z.object({
  userId: z.coerce.number({
    required_error: 'Please select a user.'
  }),
  vehicleId: z.coerce
    .number({
      required_error: 'Please select a vehicle.'
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

export { ActivitiesFormSchema };
