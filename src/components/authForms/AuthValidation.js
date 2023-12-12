import * as z from 'zod';

// add password validator
const isValidPassword = (password) => {
  // pasword rule: 1 uppercase, 1 lowercase, 1 number, 1 special character, min 8 characters
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return passwordRegex.test(password);
};

const AuthValidationFormSchema = z
  .object({
    firstName: z.string().min(2, 'Must be at least 2 characters'),
    lastName: z.string().min(2, 'Must be at least 2 characters'),
    userName: z.string().min(2, 'Must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Must be at least 10 characters'),
    password: z.string().min(8, 'Must be at least 8 characters')
  })
  .optional();

export default AuthValidationFormSchema;
