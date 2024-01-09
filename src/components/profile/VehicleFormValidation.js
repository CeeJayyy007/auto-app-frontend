import * as z from 'zod';

const AddVehicleFormSchema = z.object({
  make: z.string().min(2, 'Must be at least 2 characters'),
  model: z.string().min(2, 'Must be at least 2 characters'),
  year: z.coerce
    .number({
      required_error: 'Vehicle year is required.'
    })
    .min(1900, 'Must be at least 1900'),
  registrationNumber: z.string().min(2, 'Must be at least 2 characters')
});

const EditVehicleFormSchema = z
  .object({
    make: z.string().min(2, 'Must be at least 2 characters'),
    model: z.string().min(2, 'Must be at least 2 characters'),
    year: z.coerce.number({
      required_error: 'Vehicle year is required.'
    }),
    registrationNumber: z.string().min(2, 'Must be at least 2 characters')
  })
  .optional();

export { AddVehicleFormSchema, EditVehicleFormSchema };
