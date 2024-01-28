import * as z from 'zod';

const AddInventoryFormSchema = z.object({
  name: z
    .string({
      required_error: 'Inventory name is required.'
    })
    .min(2, 'Must be at least 2 characters'),
  quantity: z.coerce
    .number({
      required_error: 'Inventory quantity is required.'
    })
    .min(1, 'Must be at least 1'),
  initialPrice: z.coerce
    .number({
      required_error: 'Inventory initial price is required.'
    })
    .min(1, 'Must be at least 1'),
  lowLevel: z.coerce
    .number({
      required_error: 'Inventory low level is required.'
    })
    .min(1, 'Must be at least 1'),
  finalPrice: z.coerce
    .number({
      required_error: 'Inventory final price up is required.'
    })
    .gte(1, 'Must be at least 1')
    .min(1, 'Must be at least 1')
});

const EditInventoryFormSchema = z
  .object({
    name: z.string({
      required_error: 'Inventory name is required.'
    }),
    quantity: z.coerce.number({
      required_error: 'Inventory quantity is required.'
    }),
    initialPrice: z.coerce.number({
      required_error: 'Inventory initial price is required.'
    }),
    lowLevel: z.coerce.number({
      required_error: 'Inventory low level is required.'
    }),
    finalPrice: z.coerce
      .number({
        required_error: 'Inventory final price is required.'
      })
      .gte(1, 'Must be at least 1')
  })
  .partial();

export { AddInventoryFormSchema, EditInventoryFormSchema };
