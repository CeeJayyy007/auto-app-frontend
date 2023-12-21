import * as z from 'zod';

const appointmentSchema = z.object({
  date: z.string(),
  time: z.string(),
  vehicle: z.string(),
  services: z.array(z.string()),
  note: z.string()
});

export default appointmentSchema;
