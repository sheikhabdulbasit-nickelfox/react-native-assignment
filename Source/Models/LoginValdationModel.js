import * as Yup from 'yup';

export const LoginValidationModel = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email')
    .nullable(),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character',
    )
    .nullable(),
});

export const LoginInitialValues = {
  email: '',
  password: '',
};
