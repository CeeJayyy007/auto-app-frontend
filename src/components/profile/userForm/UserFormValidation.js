import * as z from 'zod';

const EditUserFormSchema = z
  .object({
    firstName: z
      .string()
      .min(3, 'First name is required and must be at least 3 characters'),
    lastName: z
      .string()
      .min(3, 'Last name is required and must be at least 3 characters'),
    email: z.string().email('Invalid email address'),
    phone: z
      .string()
      .min(10, 'Phone number is required and must be at least 10 characters'),
    username: z
      .string()
      .min(3, 'Username is required and must be at least 3 characters'),
    roles: z.string().min(3, 'Role is required')
  })
  .optional();

export { EditUserFormSchema };
