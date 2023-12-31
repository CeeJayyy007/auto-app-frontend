import * as z from 'zod';

const AddVehicleFormSchema = z.object({
  make: z.string().min(2, 'Must be at least 2 characters'),
  model: z.string().min(2, 'Must be at least 2 characters'),
  year: z.number().min(4, 'Must be at least 4 characters'),
  registrationNumber: z.string().min(2, 'Must be at least 2 characters')
});

const EditVehicleFormSchema = z
  .object({
    make: z.string().min(2, 'Must be at least 2 characters'),
    model: z.string().min(2, 'Must be at least 2 characters'),
    year: z.number().min(4, 'Must be at least 4 characters'),
    registrationNumber: z.string().min(2, 'Must be at least 2 characters')
  })
  .optional();

export { AddVehicleFormSchema, EditVehicleFormSchema };
