import * as z from 'zod';

const AuthValidationFormSchema = z
  .object({
    firstName: z.string().min(2, 'Must be at least 2 characters'),
    lastName: z.string().min(2, 'Must be at least 2 characters'),
    userName: z.string().min(2, 'Must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Must be at least 10 characters'),
    password: z.string()
  })
  .optional()
  .superRefine(({ password }, checkPassComplexity) => {
    const containsUppercase = (ch) => /[A-Z]/.test(ch);
    const containsLowercase = (ch) => /[a-z]/.test(ch);
    const containsSpecialChar = (ch) =>
      /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
    let countOfUpperCase = 0,
      countOfLowerCase = 0,
      countOfNumbers = 0,
      countOfSpecialChar = 0;

    for (let i = 0; i < password.length; i++) {
      let ch = password.charAt(i);
      if (!isNaN(+ch)) countOfNumbers++;
      else if (containsUppercase(ch)) countOfUpperCase++;
      else if (containsLowercase(ch)) countOfLowerCase++;
      else if (containsSpecialChar(ch)) countOfSpecialChar++;
    }

    let errObj = {
      upperCase: { pass: true, message: 'Add an upper case character.' },
      lowerCase: { pass: true, message: 'Add a lower case character.' },
      specialCh: { pass: true, message: 'Add a special character.' },
      totalNumber: { pass: true, message: 'Add a number.' },
      totalLength: { pass: true, message: 'Must be atleast 8 characters.' }
    };

    if (countOfLowerCase < 1) {
      errObj = { ...errObj, lowerCase: { ...errObj.lowerCase, pass: false } };
    }
    if (countOfNumbers < 1) {
      errObj = {
        ...errObj,
        totalNumber: { ...errObj.totalNumber, pass: false }
      };
    }
    if (countOfUpperCase < 1) {
      errObj = { ...errObj, upperCase: { ...errObj.upperCase, pass: false } };
    }
    if (countOfSpecialChar < 1) {
      errObj = { ...errObj, specialCh: { ...errObj.specialCh, pass: false } };
    }
    if (password.length < 8) {
      errObj = {
        ...errObj,
        totalLength: { ...errObj.totalLength, pass: false }
      };
    }

    if (
      countOfLowerCase < 1 ||
      countOfUpperCase < 1 ||
      countOfSpecialChar < 1 ||
      countOfNumbers < 1 ||
      password.length < 8
    ) {
      checkPassComplexity.addIssue({
        code: 'custom',
        path: ['password'],
        message: errObj
      });
    }
  });

export default AuthValidationFormSchema;
