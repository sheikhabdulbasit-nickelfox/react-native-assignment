import * as Yup from 'yup';

export const SignupValidationModel = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .matches(/^[a-zA-Z ]+$/, 'Name must be alphabets only')
    .nullable(),
  lastName: Yup.string()
    .required('Last name is required')
    .matches(/^[a-zA-Z ]+$/, 'Name must be alphabets only')
    .nullable(),
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
  username: Yup.string()
    .required('Username is required')
    .matches(/^[a-zA-Z\-]+$/, 'Username must be alphabets only')
    .nullable(),
  mobileNo: Yup.string()
    .required('Mobile No. is required')
    .matches(/^[6-9]\d{9}$/, 'Invalid Mobile No.')
    .nullable(),
});

export const SignupInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  username: '',
  mobileNo: '',
};
