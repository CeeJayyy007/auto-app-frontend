import { z } from 'zod';

export const appointmentSchema = z.object({
  id: z.number(),
  date: z.string(),
  status: z.string(),
  note: z.string(),
  services: z.array(z.string())
});
