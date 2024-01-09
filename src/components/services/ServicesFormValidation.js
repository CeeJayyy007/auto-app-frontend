import * as z from 'zod';

const AddServiceFormSchema = z.object({
  name: z
    .string({
      required_error: 'Service name is required.'
    })
    .min(2, 'Enter a valid name and must be at least 2 characters'),
  price: z.coerce
    .number({
      required_error: 'Service price is required.'
    })
    .min(1, 'Enter a valid price'),
  description: z
    .string({
      required_error: 'Service description is required.'
    })
    .min(2, 'Must be at least 2 characters'),
  duration: z.coerce
    .number({
      required_error: 'Service duration is required.'
    })
    .min(1, 'Please enter a valid duration')
  //   avatar: z.string({
  //     required_error: 'Service avatar is required.'
  //   })
});

const EditServiceFormSchema = z
  .object({
    name: z.string({
      required_error: 'Service name is required.'
    }),
    price: z.coerce.number({
      required_error: 'Service price is required.'
    }),
    description: z.string({
      required_error: 'Service description is required.'
    }),
    duration: z.coerce.number({
      required_error: 'Service duration is required.'
    })
    // avatar: z.string().optional()
  })
  .partial();

export { AddServiceFormSchema, EditServiceFormSchema };
